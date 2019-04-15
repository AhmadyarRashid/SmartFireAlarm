import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const userAuthenticateDefaultState = {
    id:'',
    isAuth: false,
    email: '',
    password: '',
    error: '',
    verify:false,
    userName: 'Ahmad Yar',
    phoneNo: '03335581143',
    address: 'G-9 islamabad, pakistan',
    orders: 0,
    awaitingPayment: 0,
    awaitingShipment: 0,
    awaitingDelivery: 0,
    awaitingFeedback: 0,
    disputes: 0
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
            state.userName = '';
            state.phoneNo = '';
            state.address = '';
            state.orders= 0;
            state.awaitingPayment= 0;
            state.awaitingShipment= 0;
            state.awaitingDelivery= 0;
            state.awaitingFeedback= 0;
            state.disputes= 0;
            return state;
        case ActionsTypes.updateProfile:
            state.userName = action.payload.userName;
            state.phoneNo = action.payload.phoneNo;
            state.address = action.payload.address;
            return state;
        case ActionsTypes.localStorageToRedux:
            state.id = action.payload.id;
            state.isAuth = action.payload.isAuth;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.userName = action.payload.userName;
            state.phoneNo = action.payload.phoneNo;
            state.address = action.payload.address;
            return state;
        default:
            return state;
    }
}