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
                throw new Error(`FALHA AO LER O CERTIFICADO: \n${error}`);
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

        this.getAccessToken().then(this.directReq.bind(this));
        return this.defer.promise;
    }

    private getAccessToken(): Promise<any> {
        const self = this;
        const gnAuth = new GnAuth(this.options, this.constants);
        return gnAuth
            .getAccessToken()
            .then((response) => {
                self.accessToken = response.access_token;
                return response.access_token;
            })
            .catch((err) => {
                return err;
            });
    }

    private async req(callback: any) {
        const req: any = this.getParams.call(this, this.endpoint.route);
        req.method = this.endpoint.method;
        axios(req)
            .then((res) => {
                callback(res);
            })
            .catch((error) => {
                callback(error);
            });
    }

    private directReq() {
        this.req(this.directReqCallback.bind(this));
    }

    private directReqCallback(rawResponse: any) {
        if (rawResponse.data) {
            if (rawResponse.status < 300) {
                if (rawResponse.data.data) {
                    this.defer.resolve(rawResponse.data.data);
                } else {
                    this.defer.resolve(rawResponse.data);
                }
            } else {
                this.defer.reject(rawResponse.data);
            }
        } else if (rawResponse.response && rawResponse.response.data) {
            this.defer.reject(rawResponse.response.data);
        }
    }

    private getParams(route: any): Object {
        // eslint-disable-next-line no-useless-escape
        const regex = /\:(\w+)/g;
        let query = '';
        const placeholders = route.match(regex) || [];
        const params: any = {};

        if (this.params) {
            this.params.forEach((obj: any) => {
                if (obj) {
                    Object.entries(obj).forEach((entrie: any) => {
                        // eslint-disable-next-line prefer-destructuring
                        params[entrie[0]] = entrie[1];
                    });
                }
            });
        }

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

        headers['x-skip-mtls-checking'] = !this.options.validateMtls;

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
