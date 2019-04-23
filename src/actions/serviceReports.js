import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const storeAllServiceReports =
    (
        allReports = []
    ) => ({
        type: ActionsTypes.storeAllServiceReports,
        payload: allReports
    });

export const completeServiceReport = (
    id = ''
) => ({
    type: ActionsTypes.completeServiceReports,
    id
});