import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultMyOrders = [];

export default (state = defaultMyOrders, action) => {
    switch (action.type) {
        case ActionsTypes.storeAllMyOrders:
            return [
                ...action.payload
            ];
        case ActionsTypes.addOrder:
            // if (action.payload) {
            //     var date = new Date();
            //     let order = {date, order: action.payload};
            //     state.push(order);
            // }
            return state;
        case ActionsTypes.receviceOrder:
            return state.filter(item => item._id !== action.id)
        case ActionsTypes.orderFeedback:
            state.forEach(item => {
                if(item._id == action.id){
                    item.rating = action.rating;
                    item.feedback = action.feedback
                }
            })

            return state
        default:
            return state;
    }
}