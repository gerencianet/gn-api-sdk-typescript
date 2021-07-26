/* eslint-disable dot-notation */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

// Validar Mtls?
options['validateMtls'] = true;

const body = {
    webhookUrl: 'https://exemplo-pix/webhook',
};

const params = {
    chave: 'SUACHAVEPIX',
};

const gerencianet = Gerencianet(options);

gerencianet
    .pixConfigWebhook(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
