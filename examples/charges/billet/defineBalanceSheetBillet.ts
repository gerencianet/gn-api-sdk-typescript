/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	title: 'Balancete Demonstrativo',
	body: [
		{
			header: 'Demonstrativo de Consumo',
			tables: [
				{
					rows: [
						[
							{
								align: 'left',
								color: '#000000',
								style: 'bold',
								text: 'Exemplo de despesa',
								colspan: 2,
							},
							{
								align: 'left',
								color: '#000000',
								style: 'bold',
								text: 'Total lançado',
								colspan: 2,
							},
						],
						[
							{
								align: 'left',
								color: '#000000',
								style: 'normal',
								text: 'Instalação',
								colspan: 2,
							},
							{
								align: 'left',
								color: '#000000',
								style: 'normal',
								text: 'R$ 100,00',
								colspan: 2,
							},
						],
					],
				},
			],
		},
		{
			header: 'Balancete Geral',
			tables: [
				{
					rows: [
						[
							{
								align: 'left',
								color: '#000000',
								style: 'normal',
								text: 'Confira na documentação da Gerencianet todas as configurações possíveis de um boleto balancete.',
								colspan: 4,
							},
						],
					],
				},
			],
		},
	],
};

const gerencianet = new Gerencianet(options);

gerencianet
	.defineBalanceSheetBillet(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
