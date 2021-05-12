/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    pix: {
        receberSemChave: true,
        chaves: {
            SUACHAVEPIX: {
                recebimento: {
                    txidObrigatorio: false,
                    qrCodeEstatico: {
                        recusarTodos: false,
                    },
                },
            },
        },
    },
};

const gerencianet = Gerencianet(options);

gerencianet.pixUpdateSettings([], body).then(console.log).catch(console.log).done();
