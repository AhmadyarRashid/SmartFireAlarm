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

export const updateProfile = (
    {
        userName = '',
        phoneNo = '',
        address = ''
    } = {}
) => ({
    type : ActionsTypes.updateProfile,
    payload : {
        userName,
        phoneNo,
        address
    }
});

export const localToRedux = (
    {
        id='',
        email= '',
        password='',
        isAuth= false,
        userName= '',
        phoneNo = '',
        address = ''
    }={}
) => ({
    type: ActionsTypes.localStorageToRedux,
    payload: {
        id,
        email,
        password,
        isAuth,
        userName,
        phoneNo,
        address

    }
})