/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    payment: {
        banking_billet: {
            expire_at: '2021-08-30',
            customer: {
                name: 'Gorbadoc Oldbuck',
                email: 'oldbuck@gerencianet.com.br',
                cpf: '94271564656',
                birth: '1977-01-15',
                phone_number: '5144916523',
            },
        },
    },

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

gerencianet.oneStep([], body).then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
