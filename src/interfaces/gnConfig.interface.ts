/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { PathLike } from 'fs';
import { EndpointInterface } from './endpoint.interface';

export interface GnConfig {
	client_id: string;
	client_secret: string;
	certificate?: PathLike | string;
	sandbox: boolean;
	partnerToken?: string;
	rawResponse?: any;
	baseUrl?: string;
	validateMtls?: boolean;
	authRoute?: EndpointInterface;
	agent?: any;
}
