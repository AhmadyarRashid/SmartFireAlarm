import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultMyOrders = [
    {
        date: 'Feb 14 2019',
        order: [
            {
                deviceId: 1,
                deviceDescription: 'send health to server',
                deviceName: 'HUB',
                quantity: 2,
                unitPrice: 1200,
                amount: 2400,
                image: 'http://localhost:8080/images/portfolio/01-thumbnail.jpg'
            }
        ]
    }
];

export default (state = defaultMyOrders, action) => {
    switch (action.type) {
        case ActionsTypes.addOrder:
            if (action.payload) {
                var date = new Date();
                let order = {date, order: action.payload};
                state.push(order);
            }
            return state;
        default:
            return state;
    }
}