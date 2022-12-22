/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const gerencianet = new Gerencianet(options);

const body = {
	valor: '0.01',
};

const params = {
	identificadorPagamento: 'urn:gerencianet:ea807997-9c28-47a7-8ebc-eeb672ea59f0',
};

gerencianet
	.ofDevolutionPix(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
