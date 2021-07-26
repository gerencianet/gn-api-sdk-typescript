/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 0,
};

const body = {
    billet_discount: 0,
    card_discount: 0,
    message: '',
    expire_at: '2021-01-05',
    request_delivery_address: false,
    payment_method: 'all',
};

const gerencianet = Gerencianet(options);

gerencianet
    .updateChargeLink(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
