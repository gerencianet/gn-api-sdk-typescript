/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	settings: {
		billet_discount: 1,
		message: '',
		expire_at: '2023-12-01',
		request_delivery_address: false,
		payment_method: 'all',
	},
	items: [
		{
			name: 'Product 1',
			value: 500,
			amount: 1,
		},
	],
};

const gerencianet = new Gerencianet(options);

gerencianet
	.createOneStepLink(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
