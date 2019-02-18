import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultQuery = [];

export default (state = defaultQuery, action) => {
    switch (action.type) {
        case ActionsTypes.addQuery:
            return[
                ...action.payload
            ]
        default:
            return state;
    }
}
