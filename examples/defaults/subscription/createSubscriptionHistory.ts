/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1001,
};

const body = {
    description: 'This subscription is about a service',
};

const gerencianet = Gerencianet(options);

gerencianet.createSubscriptionHistory(params, body).then(console.log).catch(console.log).done();
