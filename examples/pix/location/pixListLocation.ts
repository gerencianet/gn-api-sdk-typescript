/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    inicio: '2021-01-22T16:01:35Z',
    fim: '2021-11-30T20:10:00Z',
};

const gerencianet = Gerencianet(options);

gerencianet
    .pixListLocation(params)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
