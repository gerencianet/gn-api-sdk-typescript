/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1008,
};

const body = {
	notification_url: 'http://yourdomain.com',
	custom_id: 'my_new_id',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.updateChargeMetadata(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
