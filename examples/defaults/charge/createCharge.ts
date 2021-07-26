/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    items: [
        {
            name: 'Product 1',
            value: 1000,
            amount: 2,
        },
    ],
    shippings: [
        {
            name: 'Default Shipping Cost',
            value: 100,
        },
    ],
};

const gerencianet = Gerencianet(options);

gerencianet.createCharge({}, body).then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
