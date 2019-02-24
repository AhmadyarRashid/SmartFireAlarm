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

export const receiveOrder = (
    id = ''
) => ({
    type: ActionsTypes.receviceOrder,
    id
})

export const orderFeedBack = (
    {
        id= '',
        rating = 0,
        feedback = ''
    } = {}
) => ({
    type : ActionsTypes.orderFeedback,
    id,
    rating,
    feedback
})