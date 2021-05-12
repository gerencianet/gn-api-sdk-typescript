import { PathLike } from 'fs';

export interface ConfigInterface {
    clientIdProducao: string;
    clientSecretProducao: string;
    clientIdHomologacao: string;
    clientSecretHomologacao: string;
    pathCertProducao: PathLike;
    pathCertHomologacao: PathLike;
    sandbox: boolean;
    partnerToken?: string;
    validateMtls?: boolean;
}
