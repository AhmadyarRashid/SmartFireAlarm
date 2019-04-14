import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultDevices = [];

export default (state = defaultDevices, action) => {
    switch (action.type) {
        case ActionsTypes.addAllDevices:
            return[
                ...action.payload
            ];
        default:
            return state;
    }
}
