import * as ActionsTypes from '../actionsTypes/ActionsTypes';

export const adminLoginAction = (
    {
        email = '',
        password = ''
    } = {}
) => ({
    type: ActionsTypes.adminLogin,
    email,
    password
});

export const adminLogoutAction = () => ({
    type : ActionsTypes.adminLogout
});
