import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const userAuthenticateDefaultState = {
    isAuth: true,
    email: '',
    password: '',
    error: '',
    userName: 'Ahmad Yar',
    phoneNo: '03335581143',
    address: 'G-9 islamabad, pakistan',
    orders: 12,
    awaitingPayment: 2,
    awaitingShipment: 2,
    awaitingDelivery: 2,
    awaitingFeedback: 2,
    disputes: 2
};

export default (state = userAuthenticateDefaultState, action) => {
    switch (action.type) {
        case ActionsTypes.userAuth:
            state.isAuth = true;
            state.email = 'ahmadyarmeo@gmail.com';
            state.password = '123456';
            state.error = 'Login Sucessfully';
            return state;
        case ActionsTypes.userSignOut:
            state.isAuth = false;
            state.email = '';
            state.password = '';
            state.error = '';
            return state;
        default:
            return state;
    }
}