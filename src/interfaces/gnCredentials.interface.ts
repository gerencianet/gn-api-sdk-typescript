/* eslint-disable camelcase */
import { PathLike } from 'fs';

export interface GnCredentials {
	client_id: string;
	client_secret: string;
	certificate?: PathLike | string;
	pix_cert?: PathLike | string;
	pathCert?: PathLike | string;
	pemKey?: PathLike | string;
	sandbox: boolean;
	validateMtls?: boolean;
	partnerToken?: string;
}
