/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 25093006,
	parcel: 1,
};

const body = {
	expire_at: '2023-12-12',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.updateCarnetParcel(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
