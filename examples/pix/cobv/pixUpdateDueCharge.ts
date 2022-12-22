/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

// Informe no body somente os dados que deseja atualizar
const body = {
	loc: {
		id: 789,
	},
	devedor: {
		logradouro: 'Alameda Souza, Numero 80, Bairro Braz',
		cidade: 'Recife',
		uf: 'PE',
		cep: '70011750',
		cpf: '12345678909',
		nome: 'Francisco da Silva',
	},
	valor: {
		original: '123.45',
	},
	solicitacaoPagador: 'Cobrança dos serviços prestados.',
};

const params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVqVxd', // Informe o TxId da cobrança
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixUpdateDueCharge(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
