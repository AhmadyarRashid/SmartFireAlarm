import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const addOrder = (
    order = []
) => ({
    type: ActionsTypes.addOrder,
    payload: order
});

export const storeAllMyOrders = (
    myOrders = []
) => ({
    type: ActionsTypes.storeAllMyOrders,
    payload: myOrders
})