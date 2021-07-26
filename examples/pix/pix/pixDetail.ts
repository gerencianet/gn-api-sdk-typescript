/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    e2eId: 'E18236120202104191813s0326120V4K',
};

const gerencianet = Gerencianet(options);

gerencianet
    .pixDetail(params)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
