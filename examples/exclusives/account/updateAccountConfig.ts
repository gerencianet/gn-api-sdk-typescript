/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	pix: {
		receberSemChave: true,
		chaves: {
			SUACHAVEPIX: {
				recebimento: {
					txidObrigatorio: false,
					qrCodeEstatico: {
						recusarTodos: false,
					},
				},
			},
		},
	},
};

const gerencianet = new Gerencianet(options);

gerencianet
	.updateAccountConfig([], body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
