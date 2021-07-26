/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

// Informe no body somente os dados que deseja atualizar
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
    chave: 'SUACHAVEPIX', // Informe sua chave Pix cadastrada na Gerencianet
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
    txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVqVxd', // Informe o TxId da cobrança
};

const gerencianet = Gerencianet(options);

gerencianet.pixUpdateCharge(params, body).then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
