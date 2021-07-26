/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {};

const body = {
    name: 'My first plan',
    repeats: 24,
    interval: 2,
};

const gerencianet = Gerencianet(options);

gerencianet
    .createPlan(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
