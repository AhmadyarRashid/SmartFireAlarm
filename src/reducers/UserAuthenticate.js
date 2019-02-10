import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const userAuthenticateDefaultState = {
    isAuth: true,
    email: '',
    password: '',
    error: ''
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