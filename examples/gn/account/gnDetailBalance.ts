/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const gerencianet = Gerencianet(options);

gerencianet.gnDetailBalance().then(console.log).catch(console.log).done();
