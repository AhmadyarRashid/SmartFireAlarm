import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultCart = [];

export default (state = defaultCart, action) => {
    switch (action.type) {
        case ActionsTypes.addToCart:

            var found = state.some((item) => item.deviceId == action.payload.deviceId);
            if (found) {
                state.forEach((item, index) => {
                    if (item.deviceId == action.payload.deviceId) {
                        item.quantity = Number(item.quantity) +  Number(action.payload.quantity);
                        item.amount = Number(item.amount) + Number(action.payload.amount);
                        return state;
                    }
                });
            } else {
                state.push(action.payload);
                return state;
            }
        case ActionsTypes.deleteFronCart:
            if (action.deviceId > 0) {
                return state.filter(item => item.deviceId != action.deviceId);
            } else {
                return state;
            }

        case ActionsTypes.updateCart:
            state.forEach(item => {
                if (item.deviceId == action.deviceId){
                    item.quantity = Number(action.quantity);
                    item.amount = Number(action.quantity) * Number(item.unitPrice);
                    return state;
                }
            })

        default:
            return state;
    }
}