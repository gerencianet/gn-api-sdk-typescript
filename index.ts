/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import GnSdk from './src/gn-sdk';
import { ConfigInterface } from './src/interfaces/config.interface';
import { CredentialsInterface } from './src/interfaces/credentials.interface';

export = (options: ConfigInterface) => {
    const credentials: CredentialsInterface = {
        clientId: options.client_id,
        clientSecret: options.client_secret,
        pathCert: options.pix_cert,
        sandbox: options.sandbox,
    };

    if (options.partner_token) {
        credentials.partnerToken = options.partner_token;
    }

    return new GnSdk(credentials);
};
