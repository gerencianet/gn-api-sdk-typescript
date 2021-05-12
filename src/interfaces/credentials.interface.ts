import { PathLike } from 'fs';

export interface CredentialsInterface {
    clientId: string;
    clientSecret: string;
    pathCert: PathLike;
    sandbox: boolean;
    partnerToken?: string;
    rawResponse?: any;
    baseUrl?: string;
    validateMtls?: boolean;
}
