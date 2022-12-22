/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	inicio: '2022-01-22T16:01:35Z',
	fim: '2022-11-30T20:10:00Z',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixListWebhook(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
