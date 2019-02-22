import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const storeAllSales =
    (
        allSales = []
    ) => ({
        type: ActionsTypes.addSales,
        payload: allSales
    });