/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    name: 'My Plan',
    limit: 20,
    offset: 0,
};

const gerencianet = Gerencianet(options);

gerencianet
    .getPlans(params)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
