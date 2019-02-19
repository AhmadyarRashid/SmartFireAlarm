import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const storeAllQuery =
    (
        allQuery = []
    ) => ({
        type: ActionsTypes.addQuery,
        payload: allQuery
    });

export const sendReply =
    (
         id = ''
     ) => ({
        type: ActionsTypes.sendReply,
        id
    })