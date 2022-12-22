/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVqVxd',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixDetailCharge(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
