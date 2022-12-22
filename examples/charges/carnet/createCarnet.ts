/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	items: [
		{
			name: 'Carnet Item 1',
			value: 1000,
			amount: 2,
		},
	],
	customer: {
		name: 'Gorbadoc Oldbuck',
		email: 'oldbuck@gerencianet.com.br',
		cpf: '94271564656',
		birth: '1977-01-15',
		phone_number: '5144916523',
	},
	repeats: 12,
	split_items: false,
	expire_at: '2023-01-01',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.createCarnet({}, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
