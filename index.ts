/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import Endpoints from './src/endpoints';
import constants from './src/constants';
import { GnConfig } from './src/interfaces/gnConfig.interface';
import { GnCredentials } from './src/interfaces/gnCredentials.interface';

class Gerencianet {
	// eslint-disable-next-line no-undef
	[index: string]: any;

	constructor(options: GnCredentials) {
		if (options.pathCert || options.pix_cert) {
			options.certificate = options.pathCert || options.pix_cert;
		}

		const credentials: GnConfig = {
			client_id: options.client_id,
			client_secret: options.client_secret,
			certificate: options.certificate,
			sandbox: options.sandbox,
		};

		if(options.pemKey){
			credentials.pemKey = options.pemKey
		}

		const methods = {};
		Object.keys(constants.APIS).forEach((endpoint) => {
			const key = endpoint as keyof typeof constants.APIS;
			Object.assign(methods, constants.APIS[key].ENDPOINTS);
		});

		Object.keys(methods).forEach((api) => {
			this[api] = (params: any, body: any) => {
				const endpoints = new Endpoints(credentials, constants);
				return endpoints.run(api, params, body);
			};
		});
	}
}

export default Gerencianet;
export { GnCredentials };
