/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVqVxd',
};

const gerencianet = Gerencianet(options);

gerencianet
    .pixDetailCharge(params)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
