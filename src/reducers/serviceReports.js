import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultServiceReports = [];

export default (state = defaultServiceReports, action) => {
    switch (action.type) {
        case ActionsTypes.storeAllServiceReports:
            return [
                ...action.payload
            ];
        case ActionsTypes.completeServiceReports:
            let filterList = state.filter(item => item.id !== action.id);
            return filterList;
        default:
            return state;
    }
}
