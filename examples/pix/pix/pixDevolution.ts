/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    valor: '7.89',
};

const params = {
    e2eId: 'E18236120202104191813s0326120V4K',
    id: '101',
};

const gerencianet = Gerencianet(options);

gerencianet
    .pixDevolution(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
