import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultReports = [];

export default (state = defaultReports, action) => {
    switch (action.type) {
        case ActionsTypes.storeAllReports:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}
