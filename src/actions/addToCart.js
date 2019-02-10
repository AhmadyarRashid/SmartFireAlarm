import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const addCart = (
    {
        deviceId = 1,
        deviceDescription = '',
        quantity = 0,
        amount = 0,
    } = {}
) => ({
    type : ActionsTypes.addToCart,
    payload: {
        deviceId,
        deviceDescription,
        quantity,
        amount
    }
})