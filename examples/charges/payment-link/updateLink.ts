/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	billet_discount: 0,
	card_discount: 0,
	message: '',
	expire_at: '2024-12-01',
	request_delivery_address: false,
	payment_method: 'all',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.updateChargeLink(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
