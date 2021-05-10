/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    chave: 'SUACHAVEPIX',
};

const gerencianet = Gerencianet(options);

gerencianet.gnDeleteEvp(params).then(console.log).catch(console.log).done();
