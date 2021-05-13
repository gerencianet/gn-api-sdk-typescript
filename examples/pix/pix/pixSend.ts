/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    valor: '12.34',
    pagador: {
        chave: 'SUACHAVEPIX',
    },
    favorecido: {
        chave: 'ChavePixDeDestino',
    },
};

const gerencianet = Gerencianet(options);

gerencianet.pixSend(null, body).then(console.log).catch(console.log).done();
