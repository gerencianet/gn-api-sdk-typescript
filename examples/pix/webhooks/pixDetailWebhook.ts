/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	chave: 'SUACHAVEPIX',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixDetailWebhook(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
