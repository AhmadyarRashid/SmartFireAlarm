import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const storeAllReports =
    (
        allReports = []
    ) => ({
        type: ActionsTypes.storeAllReports,
        payload: allReports
    });