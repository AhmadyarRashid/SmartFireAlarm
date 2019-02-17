import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultUsers = [];

export default (state = defaultUsers, action) => {
    switch (action.type) {
        case ActionsTypes.addUsers:
           return[
               ...action.payload
           ]
        default:
            return state;
    }
}
