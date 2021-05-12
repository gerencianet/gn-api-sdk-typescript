/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    token: '252948279264ee47e117cb099ef81',
};

const gerencianet = Gerencianet(options);

gerencianet.getNotification(params).then(console.log).catch(console.log).done();
