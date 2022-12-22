/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {};

const body = {
	name: 'My first plan',
	repeats: 24,
	interval: 2,
};

const gerencianet = new Gerencianet(options);

gerencianet
	.createPlan(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
