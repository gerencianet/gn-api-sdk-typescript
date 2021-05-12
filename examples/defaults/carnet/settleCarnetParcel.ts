/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 26812,
    parcel: 5,
};

const gerencianet = Gerencianet(options);

gerencianet.settleCarnetParcel(params).then(console.log).catch(console.log).done();
