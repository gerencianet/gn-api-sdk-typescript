/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 0,
};

const body = {
    payment: {
        credit_card: {
            payment_token: '33ffd6d982cd63f767fb2ee5c458cd39e8fc0ea0',
            billing_address: {
                street: 'Av. JK',
                number: 909,
                neighborhood: 'Bauxita',
                zipcode: '35400000',
                city: 'Ouro Preto',
                state: 'MG',
            },
            customer: {
                name: 'Gorbadoc Oldbuck',
                email: 'oldbuck@gerencianet.com.br',
                cpf: '94271564656',
                birth: '1977-01-15',
                phone_number: '5144916523',
            },
        },
    },
};

const gerencianet = Gerencianet(options);

gerencianet.paySubscription(params, body).then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
