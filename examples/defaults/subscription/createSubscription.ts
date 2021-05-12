/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const planBody = {
    name: 'My first plan',
    repeats: 24,
    interval: 2,
};

const subscriptionBody = {
    items: [
        {
            name: 'Product 1',
            value: 1000,
            amount: 2,
        },
    ],
};

const gerencianet = Gerencianet(options);

const createSubscription = (response: any) => {
    const params = {
        id: response.data.plan_id,
    };

    return gerencianet.createSubscription(params, subscriptionBody);
};

gerencianet
    .createPlan({}, planBody)
    .then(createSubscription)
    .then(console.log)
    .catch(console.log)
    .done();
