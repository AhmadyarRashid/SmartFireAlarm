import * as ActionsTypes from '../actionsTypes/ActionsTypes';

// UserAuth
export const userAuth = (
    {
        email = '',
        password = ''
    } = {}
) => ({
    type: ActionsTypes.userAuth,
    email,
    password
});

export const userSignOut = (
    {} = {}
) => ({
    type: ActionsTypes.userSignOut
})