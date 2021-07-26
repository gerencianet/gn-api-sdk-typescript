/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1008,
    parcel: 1,
};

const body = {
    expire_at: '2020-12-12',
};

const gerencianet = Gerencianet(options);

gerencianet
    .updateParcel(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
