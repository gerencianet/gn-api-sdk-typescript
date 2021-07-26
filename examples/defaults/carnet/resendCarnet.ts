/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1002,
};

const body = {
    email: 'oldbuck@gerencianet.com.br',
};

const gerencianet = Gerencianet(options);

gerencianet
    .resendCarnet(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
