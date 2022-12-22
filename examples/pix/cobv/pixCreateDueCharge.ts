/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	calendario: {
		dataDeVencimento: '2022-12-01',
		validadeAposVencimento: 30,
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
		multa: {
			modalidade: 2,
			valorPerc: '15.00',
		},
		juros: {
			modalidade: 2,
			valorPerc: '2.00',
		},
		desconto: {
			modalidade: 1,
			descontoDataFixa: [
				{
					data: '2022 - 11 - 30',
					valorPerc: '30.00',
				},
			],
		},
	},
	chave: 'suaChavePix',
};

const params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVq111',
};

const gerencianet = new Gerencianet(options);

gerencianet
	.pixCreateDueCharge(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
