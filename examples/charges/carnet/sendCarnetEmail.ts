/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1002,
};

const body = {
	email: 'oldbuck@gerencianet.com.br',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.sendCarnetEmail(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
