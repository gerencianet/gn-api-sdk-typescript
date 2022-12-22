/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	items: [
		{
			name: 'Product One',
			value: 600,
			amount: 1,
		},
	],
	payment: {
		credit_card: {
			installments: 1,
			payment_token: '83d52dbd590d9ebc991938c711ddd31f65df89a5',
			billing_address: {
				street: 'Street 3',
				number: 10,
				neighborhood: 'Bauxita',
				zipcode: '35400000',
				city: 'Ouro Preto',
				state: 'MG',
			},
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
	.oneStepSubscription(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
