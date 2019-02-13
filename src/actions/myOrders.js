import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const addOrder = (
    order = []
) => ({
    type: ActionsTypes.addOrder,
    payload: order
})