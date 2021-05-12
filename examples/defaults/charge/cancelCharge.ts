/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 0,
};

const gerencianet = Gerencianet(options);

gerencianet.cancelCharge(params).then(console.log).catch(console.log).done();
