/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    type: 'visa',
    total: 5000,
};

const gerencianet = Gerencianet(options);

gerencianet.getInstallments(params).then(console.log).catch(console.log).done();
