import * as ActionsTypes from '../actionsTypes/ActionsTypes';

const defaultAdminLogin = {
    email: 'admin@gmail.com',
    password : 'Admin123',
    isAuth: true
}

export default (state = defaultAdminLogin, action) =>{
    switch (action.type) {
        case ActionsTypes.adminLogin:
            state.email = action.email;
            state.password = action.password;
            state.isAuth = true
            console.log('====== reducer ========' , state);
            return state
        default:
          return state;
    }
}