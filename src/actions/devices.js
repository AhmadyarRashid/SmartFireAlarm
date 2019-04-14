import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const storeAllDevices = (
    alldevices = []
)=>({
    type: ActionsTypes.addAllDevices,
    payload: alldevices
});