/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	items: [
		{
			name: 'Product 1',
			value: 1000,
			amount: 2,
		},
	],
	shippings: [
		{
			name: 'Default Shipping Cost',
			value: 100,
		},
	],
};

const gerencianet = new Gerencianet(options);

gerencianet
	.createCharge({}, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
