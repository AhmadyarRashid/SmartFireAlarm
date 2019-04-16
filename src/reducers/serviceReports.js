import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultServiceReports = [];

export default (state = defaultServiceReports, action) => {
    switch (action.type) {
        case ActionsTypes.storeAllServiceReports:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}
