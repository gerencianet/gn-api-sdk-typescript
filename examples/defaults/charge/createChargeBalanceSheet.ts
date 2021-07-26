/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 0,
};

const body = {
    title: 'Balancete Demonstrativo',
    body: [
        {
            header: 'Demonstrativo de Consumo',
            tables: [
                {
                    rows: [
                        [
                            {
                                align: 'left',
                                color: '#000000',
                                style: 'bold',
                                text: 'Exemplo de despesa',
                                colspan: 2,
                            },
                            {
                                align: 'left',
                                color: '#000000',
                                style: 'bold',
                                text: 'Total lançado',
                                colspan: 2,
                            },
                        ],
                        [
                            {
                                align: 'left',
                                color: '#000000',
                                style: 'normal',
                                text: 'Instalação',
                                colspan: 2,
                            },
                            {
                                align: 'left',
                                color: '#000000',
                                style: 'normal',
                                text: 'R$ 100,00',
                                colspan: 2,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            header: 'Balancete Geral',
            tables: [
                {
                    rows: [
                        [
                            {
                                align: 'left',
                                color: '#000000',
                                style: 'normal',
                                text:
                                    'Confira na documentação da Gerencianet todas as configurações possíveis de um boleto balancete.',
                                colspan: 4,
                            },
                        ],
                    ],
                },
            ],
        },
    ],
};

const gerencianet = Gerencianet(options);

gerencianet.createChargeBalanceSheet(params, body).then((resposta: any) => {
        console.log(resposta);
    })
    .catch((error: any) => {
        console.log(error);
    })
    .done();
