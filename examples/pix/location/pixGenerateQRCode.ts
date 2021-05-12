/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: '95',
};

const gerencianet = Gerencianet(options);

gerencianet.pixGenerateQRCode(params).then(console.log).catch(console.log).done();
