import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const storeAllUser = (
    allUser = []
)=>({
    type: ActionsTypes.addUsers,
    payload: allUser
});