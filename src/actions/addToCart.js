import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const addCart = (
    {
        deviceId = 0,
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
});


export const deleteItemFromCart = (deviceId = 0) => ({
    type: ActionsTypes.deleteFronCart,
    deviceId
});

export const updateQuantityCart = (
    {
        deviceId = 0,
        quantity = 0
    } ={}
    )=>({
    type: ActionsTypes.updateCart,
    deviceId,
    quantity
})