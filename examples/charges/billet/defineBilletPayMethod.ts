/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	payment: {
		banking_billet: {
			expire_at: '2023-12-01',
			customer: {
				name: 'Gorbadoc Oldbuck',
				email: 'oldbuck@gerencianet.com.br',
				cpf: '94271564656',
				birth: '1977-01-15',
				phone_number: '5144916523',
			},
		},
	},
};

const gerencianet = new Gerencianet(options);

gerencianet
	.definePayMethod(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
