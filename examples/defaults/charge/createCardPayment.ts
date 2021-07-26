/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    payment: {
        credit_card: {
            installments: 1,
            payment_token: '6426f3abd8688639c6772963669bbb8e0eb3c319',
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

const params = {
    id: 1000,
};

const gerencianet = Gerencianet(options);

gerencianet.payCharge(params, body).then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
