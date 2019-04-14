import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultAdminLogin = {
    email: '',
    password: '',
    isAuth: true
};

export default (state = defaultAdminLogin, action) => {
    switch (action.type) {
        case ActionsTypes.adminLogin:
            state.email = action.email;
            state.password = action.password;
            state.isAuth = true;
            console.log('====== reducer ========', state);
            return state;
        case ActionsTypes.adminLogout:
            state.email = '';
            state.password = '';
            state.isAuth = false;
            console.log('====== reducer ========', state);
            return state;
        default:
            return state;
    }
}