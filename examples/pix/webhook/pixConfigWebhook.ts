/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    webhookUrl: 'https://exemplo-pix/webhook',
};

const params = {
    chave: 'SUACHAVEPIX',
};

const gerencianet = Gerencianet(options);

gerencianet.pixConfigWebhook(params, body).then(console.log).catch(console.log).done();
