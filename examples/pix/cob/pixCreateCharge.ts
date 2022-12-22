/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	calendario: {
		expiracao: 3600,
	},
	devedor: {
		cpf: '94271564656',
		nome: 'Gorbadock Oldbuck',
	},
	valor: {
		original: '123.45',
	},
	chave: 'SUACHAVEPIX', // Informe sua chave Pix cadastrada na gerencianet	//o campo abaixo é opcional
	infoAdicionais: [
		{
			nome: 'Pagamento em',
			valor: 'NOME DO SEU ESTABELECIMENTO',
		},
		{
			nome: 'Pedido',
			valor: 'NUMERO DO PEDIDO DO CLIENTE',
		},
	],
};

const params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVq111',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixCreateCharge(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
