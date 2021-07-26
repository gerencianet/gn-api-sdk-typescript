/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1009,
};

const body = {
    notification_url: 'http://yourdomain.com',
    custom_id: 'my_new_id',
};

const gerencianet = Gerencianet(options);

gerencianet
    .updateSubscriptionMetadata(params, body)
    .then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
