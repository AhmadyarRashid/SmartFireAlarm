import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultSales = [];

export default (state = defaultSales, action) => {
    switch (action.type) {
        case ActionsTypes.addSales:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}
