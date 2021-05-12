/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import GnSdk from './src/gn-sdk';
import { ConfigInterface } from './src/interfaces/config.interface';
import { CredentialsInterface } from './src/interfaces/credentials.interface';

export = (options: ConfigInterface) => {
    let credentials: CredentialsInterface;

    if (options.sandbox) {
        credentials = {
            clientId: options.clientIdHomologacao,
            clientSecret: options.clientSecretHomologacao,
            pathCert: options.pathCertHomologacao,
            sandbox: options.sandbox,
        };
    } else {
        credentials = {
            clientId: options.clientIdProducao,
            clientSecret: options.clientSecretProducao,
            pathCert: options.pathCertProducao,
            sandbox: options.sandbox,
        };
    }
    if (options.partnerToken) {
        credentials.partnerToken = options.partnerToken;
    }
    if (options.validateMtls) {
        credentials.validateMtls = options.validateMtls;
    }
    return new GnSdk(credentials);
};
