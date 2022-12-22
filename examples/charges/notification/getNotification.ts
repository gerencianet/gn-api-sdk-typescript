/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	token: '252948279264ee47e117cb099ef81',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.getNotification(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
