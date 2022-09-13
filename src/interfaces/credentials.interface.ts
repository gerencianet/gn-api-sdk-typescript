import { PathLike } from 'fs';

export interface CredentialsInterface {
    clientId: string;
    clientSecret: string;
    sandbox: boolean;
    pathCert?: PathLike;
    partnerToken?: string;
    rawResponse?: any;
    baseUrl?: string;
    validateMtls?: boolean;
}
