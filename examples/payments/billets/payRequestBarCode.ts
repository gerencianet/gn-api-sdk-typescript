/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const gerencianet = new Gerencianet(options);

const params = {
	codBarras: '',
};

const body = {
	valor: 0,
	dataPagamento: '2022-03-10',
	descricao: 'Pagamento de boleto, teste API Pagamentos',
};

gerencianet
	.payRequestBarCode(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
