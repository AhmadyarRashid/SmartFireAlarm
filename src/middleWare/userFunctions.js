import axios from 'axios';

export const login = user => {
    return axios
        .post('https://fasserver.herokuapp.com/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
};

export const register = user => {
    return axios
        .post('https://fasserver.herokuapp.com/users/register', {
            name: user.userName,
            address: user.address,
            email: user.email,
            city: user.city,
            password: user.password,
            phoneNo: user.phoneNo
        })
        .then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
};

export const changePassword = user => {
    return axios
        .post('https://fasserver.herokuapp.com/users/changePassword', {
            email: user.email,
            oldPass: user.oldPass,
            newPass: user.newPass
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const userUpdateProfile = user => {
    return axios
        .post('https://fasserver.herokuapp.com/users/updateProfile', {
            email: user.email,
            name: user.name,
            phoneNo: user.phoneNo,
            address: user.address
        }).then(res => {
            return res.data;
        }).catch(e => {
            console.log(e);
        });
};

export const getProductQty = () => {
    return axios
        .post('https://fasserver.herokuapp.com/users/getQty', {})
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        });
};

export const buyProduct = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/buyProduct', {
                email: data.email,
                hub: data.hubQty,
                slave: data.slaveQty,
                shipping: data.shipping
            }
        )
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        });
};

export const userQuery = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/contact', {
            name: data.name,
            email: data.email,
            phoneNo: data.phoneNo,
            message: data.message
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        });
};

export const getUserOrders = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/myorders', {
            userId: data.userId
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e);
        })
};

export const recievedOrder = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/receivedOrder', {
            id: data.id
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e);
        })
};

export const resetPassword = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/resetPassword', {
            id: data.id,
            password: data.password
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        })
};

export const confirmResetUser = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/confirmResetUser', {
            id: data.id
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        })
};


export const forgetPassword = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/forgetPassword', {
            email: data.email
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e);
        })
};

export const sendFeedBack = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/orderFeedBack', {
            id: data.id,
            rating: data.rating,
            feedback: data.feedback
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e);
        })
};

export const verifyEmail = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/verifyEmail', {
            id: data.id
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e);
        })
};

export const emailVerifyOrNot = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/emailVerifyOrNot',{
            id: data.id
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
};

export const submitServiceReport = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/submitServiceReport',{
            userId: data.userId,
            email : data.email,
            description : data.description
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
};

export const getAllServiceReport = data => {
    return axios
        .post('https://fasserver.herokuapp.com/users/getAllServiceReport',{
            userId: data.userId
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
};





