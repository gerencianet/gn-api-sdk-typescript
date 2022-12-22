/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const planBody = {
	name: 'My first plan',
	repeats: 24,
	interval: 2,
};

const subscriptionBody = {
	items: [
		{
			name: 'Product 1',
			value: 1000,
			amount: 2,
		},
	],
};

const gerencianet = new Gerencianet(options);

function createSubscription(response) {
	const params = {
		id: response.data.plan_id,
	};

	return gerencianet.createSubscription(params, subscriptionBody);
}

gerencianet
	.createPlan({}, planBody)
	.then(createSubscription)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
