/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const gerencianet = new Gerencianet(options);

const body = {
	redirectURL: 'https:/suaUrl.com.br/redirect',
	webhookURL: 'https://suaUrl.com.br/webhook',
};

gerencianet
	.ofConfigUpdate([], body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
