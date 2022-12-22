/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1008,
};

const body = {
	name: 'My new plan',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.updatePlan(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
