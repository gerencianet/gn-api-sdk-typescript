/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1001,
};

const body = {
	description: 'This charge was not fully paid',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.createChargeHistory(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
