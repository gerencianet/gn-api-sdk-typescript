/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import GnEndpoints from './gn-endpoints';
import constants from './gn-constants';
import { CredentialsInterface } from './interfaces/credentials.interface';

class GnSdk {
    // eslint-disable-next-line no-undef
    [index: string]: any;

    constructor(options: CredentialsInterface) {
        this.options = options;
        const methods: any = constants.ENDPOINTS;

        Object.keys(methods).forEach((api) => {
            Object.keys(methods[api]).forEach((key) => {
                this[key] = (params: any, body: any) => {
                    const endpoints = new GnEndpoints(options, constants);
                    return endpoints.run(key, params, body);
                };
            });
        });
    }
}

export default GnSdk;
