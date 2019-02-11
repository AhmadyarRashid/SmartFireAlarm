import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultCart = [
    {
        deviceId: 1,
        deviceDescription: 'Hub Device',
        image: 'http://localhost:8080/images/portfolio/01-thumbnail.jpg',
        unitPrice: 1200,
        quantity: 0,
        amount: 0
    },
    {
        deviceId: 2,
        deviceDescription: 'Slave Device',
        image: 'http://localhost:8080/images/portfolio/01-thumbnail.jpg',
        unitPrice: 600,
        quantity: 0,
        amount: 0
    }];

export default (state = defaultCart, action) => {
    switch (action.type) {
        case ActionsTypes.addToCart:
            state.map(item => {
                if (item.deviceId == action.payload.deviceId) {
                    item.quantity = Number(item.quantity) + Number(action.payload.quantity);
                    item.amount = Number(item.amount) + Number(action.payload.amount);
                    return state;
                }
            });
        case ActionsTypes.deleteFronCart:
            if (action.deviceId > 0){
                state[Number(action.deviceId) - 1].quantity = 0;
                state[Number(action.deviceId) - 1].amount = state[Number(action.deviceId) - 1].unitPrice;
                return state;
            } else {
                return state;
            }

        case ActionsTypes.updateCart:
            if (action.deviceId > 0){
                state[Number(action.deviceId) - 1].quantity = action.quantity;
                state[Number(action.deviceId) - 1].amount = Number(action.quantity) * state[Number(action.deviceId) - 1].unitPrice;
                return state;
            } else {
                return state;
            }

        default:
            return state;
    }
}