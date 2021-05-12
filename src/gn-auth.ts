/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs, { PathLike } from 'fs';
import axios from 'axios';
import https from 'https';
import sdkPackage from '../package.json';
import { CredentialsInterface } from './interfaces/credentials.interface';

class GnAuth {
    private constants: any;

    private clientId: String;

    private clientSecret: String;

    private pathCert: PathLike;

    private baseUrl?: String;

    private certificate?: Buffer;

    constructor(options: CredentialsInterface, constants: any) {
        this.constants = constants;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.pathCert = options.pathCert;
        this.baseUrl = options.baseUrl;
    }

    public getAccessToken(): Promise<any> {
        let postParams: any;
        // eslint-disable-next-line prettier/prettier
        if ( this.constants.URL.PIX.production === this.baseUrl || this.constants.URL.PIX.sandbox === this.baseUrl) {
            try {
                this.certificate = fs.readFileSync(this.pathCert);
            } catch (error) {
                throw new Error('FALHA AO LER O CERTIFICADO');
            }
            const dataCredentials = `${this.clientId}:${this.clientSecret}`;
            const auth = Buffer.from(dataCredentials).toString('base64');

            const agent = new https.Agent({
                pfx: this.certificate,
                passphrase: '',
            });

            postParams = {
                method: 'POST',
                url: this.baseUrl + this.constants.ENDPOINTS.PIX.authorize.route,
                headers: {
                    Authorization: `Basic ${auth}`,
                    'Content-Type': 'application/json',
                    'api-sdk': `typescript-${sdkPackage.version}`,
                },
                httpsAgent: agent,
                data: {
                    grant_type: 'client_credentials',
                },
            };
        } else {
            postParams = {
                method: 'POST',
                url: String(this.baseUrl + this.constants.ENDPOINTS.DEFAULT.authorize.route),
                auth: {
                    username: this.clientId,
                    password: this.clientSecret,
                },
                data: {
                    grant_type: 'client_credentials',
                },
                headers: {
                    'api-sdk': `typescript-${sdkPackage.version}`,
                },
            };
        }
        const response = axios(postParams)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.error(error);
            });

        return response;
    }
}

export default GnAuth;
