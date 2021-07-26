/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1001,
};

const body = {
    description: 'This charge was not fully paid',
};

const gerencianet = Gerencianet(options);

gerencianet
    .createChargeHistory(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
