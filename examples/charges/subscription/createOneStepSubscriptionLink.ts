/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	items: [
		{
			name: 'Product One',
			value: 600,
			amount: 1,
		},
	],
	settings: {
		payment_method: 'all',
		expire_at: '2022-12-15',
		request_delivery_address: false,
	},
};

const gerencianet = new Gerencianet(options);

gerencianet
	.oneStepSubscriptionLink(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
