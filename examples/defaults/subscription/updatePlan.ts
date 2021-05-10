/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1008,
};

const body = {
    name: 'My new plan',
};

const gerencianet = Gerencianet(options);

gerencianet.updatePlan(params, body).then(console.log).catch(console.log).done();
