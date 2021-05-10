/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1001,
};

const body = {
    description: 'This carnet is about a service',
};

const gerencianet = Gerencianet(options);

gerencianet.createCarnetHistory(params, body).then(console.log).catch(console.log).done();
