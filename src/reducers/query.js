import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultQuery = [];

export default (state = defaultQuery, action) => {
    switch (action.type) {
        case ActionsTypes.addQuery:
            return [
                ...action.payload
            ]
        case ActionsTypes.sendReply:
            state.forEach(query => {
                if (query._id === action.id) {
                    query.status = true;
                }
            })
            return state
        default:
            return state;
    }
}
