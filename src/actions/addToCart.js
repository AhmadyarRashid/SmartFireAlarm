import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const addCart = (
    {
        deviceId = 0,
        deviceDescription = '',
        image = '',
        unitPrice = 0,
        quantity = 0,
        amount = 0,
    } = {}
) => ({
    type : ActionsTypes.addToCart,
    payload: {
        deviceId,
        deviceDescription,
        image,
        unitPrice,
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