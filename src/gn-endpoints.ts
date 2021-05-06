/* eslint-disable import/extensions */
import fs from 'fs';
import q from 'q';
import https from 'https';
import axios from 'axios';
import GnAuth from './gn-auth';
import sdkPackage from '../package.json';
import { CredentialsInterface } from './interfaces/credentials.interface';
import { EndpointInterface } from './interfaces/endpoint.interface';

class GnEndpoints {
    private options: CredentialsInterface;

    private accessToken!: String;

    private constants: any;

    private defer!: any;

    private certificate!: Buffer;

    private agent: any;

    private endpoint!: EndpointInterface;

    private body: any;

    private params: any;

    constructor(options: CredentialsInterface, constants: any) {
        this.options = options;
        this.constants = constants;
    }

    public run(name: any, params: any, body: any): Promise<any> {
        this.defer = q.defer();
        if (Object.keys(this.constants.ENDPOINTS.PIX).includes(name)) {
            try {
                this.certificate = fs.readFileSync(this.options.pathCert);
                this.agent = new https.Agent({
                    pfx: this.certificate,
                    passphrase: '',
                });
            } catch (error) {
                throw new Error('FALHA AO LER O CERTIFICADO');
            }
            this.endpoint = this.constants.ENDPOINTS.PIX[name];
            this.options.baseUrl = this.options.sandbox
                ? this.constants.URL.PIX.sandbox
                : this.constants.URL.PIX.production;
        } else {
            this.endpoint = this.constants.ENDPOINTS.DEFAULT[name];
            this.options.baseUrl = this.options.sandbox
                ? this.constants.URL.DEFAULT.sandbox
                : this.constants.URL.DEFAULT.production;
        }
        this.body = body;
        this.params = [params];

        if (!this.accessToken) {
            this.getAccessToken().then(this.directReq.bind(this));
        } else {
            this.withTokenReq.call(this);
        }

        return this.defer.promise;
    }

    private getAccessToken(): Promise<any> {
        const gnAuth = new GnAuth(this.options, this.constants);
        return gnAuth
            .getAccessToken()
            .then((response) => {
                this.accessToken = response.access_token;
                return this.accessToken;
            })
            .catch((err) => {
                return err;
            });
    }

    private getResponse(response: any, body: any) {
        return this.options.rawResponse ? response : body;
    }

    private req() {
        const req: any = this.getParams.call(this, this.endpoint.route);
        req.method = this.endpoint.method;
        axios(req)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    private directReq() {
        this.directReqCallback.bind(this);
        this.req();
    }

    private directReqCallback(err: any, httpResponse: { statusCode: number }, bodyResponse: any) {
        const response = this.getResponse(httpResponse, bodyResponse);

        if (err) {
            this.defer.reject(err);
        } else if (httpResponse.statusCode !== 200) {
            this.defer.reject(response);
        } else {
            this.defer.resolve(response);
        }
    }

    private withTokenReq() {
        this.withTokenReqCallback.bind(this);
    }

    private withTokenReqCallback(
        err: any,
        httpResponse: { statusCode: number },
        httpResponseBody: any
    ) {
        const self = this;
        const response = self.getResponse(httpResponse, httpResponseBody);

        if (err) {
            self.defer.reject(err);
        } else if (httpResponse.statusCode === 401) {
            self.getAccessToken().then(self.directReq.bind(self));
        } else if (httpResponse.statusCode !== 200) {
            self.defer.reject(response);
        } else {
            self.defer.resolve(response);
        }
    }

    private getParams(route: any): Object {
        const self = this;
        // eslint-disable-next-line no-useless-escape
        const regex = /\:(\w+)/g;
        let query = '';
        const placeholders = route.match(regex) || [];
        const params: any = {};

        self.params.forEach((value: any, index: any) => {
            params[Object.keys(value)[index]] = value[Object.keys(value)[index]];
        });

        const getVariables = () => {
            return placeholders.map((item: any) => {
                return item.replace(':', '');
            });
        };

        const updateRoute = () => {
            const variables = getVariables();
            variables.forEach((value: any, index: any) => {
                if (params[value]) {
                    // eslint-disable-next-line no-param-reassign
                    route = route.replace(placeholders[index], params[value]);
                    delete params[value];
                }
            });
        };

        const getQueryString = () => {
            const keys = Object.keys(params);
            const initial = keys.length >= 1 ? '?' : '';
            return keys.reduce((previous, current, index, array) => {
                const next = index === array.length - 1 ? '' : '&';
                return [previous, current, '=', params[current], next].join('');
            }, initial);
        };

        updateRoute();
        query = getQueryString();

        const headers: any = {
            'api-sdk': `typescript-${sdkPackage.version}`,
            'Content-Type': 'application/json',
            authorization: `Bearer ${this.accessToken}`,
        };
        if (this.options.validateMtls) {
            headers['x-skip-mtls-checking'] = false;
        }else{
            headers['x-skip-mtls-checking'] = true;
        }

        if (this.options.partnerToken) {
            headers['partner-token'] = this.options.partnerToken;
        }

        const req: any = {
            url: [this.options.baseUrl, route, query].join(''),
            headers,
            data: this.body,
        };

        if (
            this.constants.URL.PIX.production === this.options.baseUrl ||
            this.constants.URL.PIX.sandbox === this.options.baseUrl
        ) {
            req.httpsAgent = this.agent;
        }

        return req;
    }
}
export default GnEndpoints;
