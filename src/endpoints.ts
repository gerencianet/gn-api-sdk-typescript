/* eslint-disable import/extensions */
import fs from 'fs';
import https from 'https';
import axios from 'axios';
import Auth from './auth';
import sdkPackage from '../package.json';
import { GnConfig } from './interfaces/gnConfig.interface';
import { EndpointInterface } from './interfaces/endpoint.interface';

class Endpoints {
	private options: GnConfig;

	private constants: any;

	private agent!: https.Agent;

	private endpoint!: EndpointInterface;

	private body: any;

	private params: any;

	constructor(options: GnConfig, constants: any) {
		this.options = options;
		this.constants = constants;
	}

	public run(name: any, params: any, body: any): Promise<any> {
		if (Object.keys(this.constants.APIS.DEFAULT.ENDPOINTS).includes(name)) {
			this.endpoint = this.constants.APIS.DEFAULT.ENDPOINTS[name];
			this.options.baseUrl = this.options.sandbox ? this.constants.APIS.DEFAULT.URL.SANDBOX : this.constants.APIS.DEFAULT.URL.PRODUCTION;
		} else {
			Object.keys(this.constants.APIS).forEach((api) => {
				if (Object.keys(this.constants.APIS[api].ENDPOINTS).includes(name)) {
					this.endpoint = this.constants.APIS[api].ENDPOINTS[name];
					this.options.baseUrl = this.options.sandbox ? this.constants.APIS[api].URL.SANDBOX : this.constants.APIS[api].URL.PRODUCTION;
					this.options.authRoute = this.constants.APIS[api].ENDPOINTS.authorize;
				}
			});

			try {
				if (this.options.certificate) {
					if(this.options.pemKey){
						this.agent = new https.Agent({
							cert:  fs.readFileSync(this.options.certificate),
							key:  fs.readFileSync(this.options.pemKey),
							passphrase: '',
						});
					}else{
						this.agent = new https.Agent({
							pfx: fs.readFileSync(this.options.certificate),
							passphrase: '',
						});
					}
					this.options.agent = this.agent;
				}
			} catch (error) {
				throw new Error(`FALHA AO LER O CERTIFICADO`);
			}
		}

		this.body = body;
		this.params = [params];

		return this.req();
	}

	public getAccessToken(): Promise<any> {
		const gnAuth = new Auth(this.options, this.constants);
		return gnAuth
			.getAccessToken()
			.then((response) => {
				return response.access_token;
			})
			.catch((err) => {
				return err;
			});
	}

	public async req() {
		const req = await this.createRequest(this.endpoint.route);

		return axios(req)
			.then((res: any) => {
				return res.data;
			})
			.catch((error: any) => {
				throw error.response.data;
			});
	}

	public async createRequest(route: any): Promise<Object> {
		// eslint-disable-next-line no-useless-escape
		const regex = /\:(\w+)/g;
		let query = '';
		const placeholders = route.match(regex) || [];
		const params: any = {};

		if (this.params) {
			this.params.forEach((obj: any) => {
				if (obj) {
					Object.entries(obj).forEach((entrie: any) => {
						// eslint-disable-next-line prefer-destructuring
						params[entrie[0]] = entrie[1];
					});
				}
			});
		}

		const getVariables = () => {
			return placeholders.map((item: any) => {
				return item.replace(':', '');
			});
		};

		const updateRoute = () => {
			const variables = getVariables();
			variables.forEach((value: any, index: any) => {
				if (params[value]) {
					// eslint-disable-next-line no-param-reassign
					route = route.replace(placeholders[index], params[value]);
					delete params[value];
				}
			});
		};

		const getQueryString = () => {
			const keys = Object.keys(params);
			const initial = keys.length >= 1 ? '?' : '';
			return keys.reduce((previous, current, index, array) => {
				const next = index === array.length - 1 ? '' : '&';
				return [previous, current, '=', params[current], next].join('');
			}, initial);
		};

		updateRoute();
		query = getQueryString();

		const accessToken = await this.getAccessToken();

		const headers: any = {
			'api-sdk': `typescript-${sdkPackage.version}`,
			'Content-Type': 'application/json',
			authorization: `Bearer ${accessToken}`,
		};

		headers['x-skip-mtls-checking'] = !this.options.validateMtls;

		if (this.options.partnerToken) {
			headers['partner-token'] = this.options.partnerToken;
		}

		const req: any = {
			method: this.endpoint.method,
			url: [this.options.baseUrl, route, query].join(''),
			headers,
			data: this.body,
		};

		if (this.options.baseUrl !== this.constants.APIS.DEFAULT.URL.PRODUCTION && this.options.baseUrl !== this.constants.APIS.DEFAULT.URL.SANDBOX) {
			req.httpsAgent = this.agent;
		}

		return req;
	}
}
export default Endpoints;
