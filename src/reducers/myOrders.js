import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultMyOrders = [];

export default (state = defaultMyOrders, action) => {
    switch (action.type) {
        case ActionsTypes.addOrder:
            if(action.payload){
                var date = new Date();
                let order = {date, order: action.payload};
                state.push(order);
            }
            return state;
        default:
            return state;
    }
}