/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

options.validateMtls = false;

const body = {
	webhookUrl: 'https://exemplo-pix/webhook',
};

const params = {
	chave: 'SUACHAVEPIX',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixConfigWebhook(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
