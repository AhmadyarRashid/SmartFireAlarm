import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const userAuthenticateDefaultState = [];

export default (state = userAuthenticateDefaultState, action) => {
    switch (action.type) {
        case ActionsTypes.addToCart:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}