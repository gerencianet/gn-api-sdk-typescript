/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1008,
};

const body = {
	expire_at: '2024-12-12',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.updateBillet(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
