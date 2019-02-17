import axios from 'axios';

export const login = user => {
    return axios
        .post('http://localhost:3000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const register = user => {
    return axios
        .post('http://localhost:3000/users/register', {
            name: user.userName,
            address: user.address,
            email: user.email,
            password: user.password,
            phoneNo: user.phoneNo
        })
        .then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
}

export const changePassword = user => {
    return axios
        .post('http://localhost:3000/users/changePassword', {
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
}

export const userUpdateProfile = user => {
    return axios
        .post('http://localhost:3000/users/updateProfile', {
            email: user.email,
            name: user.name,
            phoneNo: user.phoneNo,
            address: user.address
        }).then(res => {
            return res.data;
        }).catch(e => {
            console.log(e);
        });
}

export const getProductQty = data => {
    return axios
        .post('http://localhost:3000/users/getQty', {})
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        });
}

export const buyProduct = data => {
    return axios
        .post('http://localhost:3000/users/buyProduct', {
                data
            }
        )
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        });
}

export const userQuery = data => {
    return axios
        .post('http://localhost:3000/users/contact', {
            name: data.name,
            email: data.email,
            phoneNo: data.phoneNo,
            message : data.message
        })
        .then(res => {
            return res.data
        })
        .catch(e => {
            console.log(e)
        });
}

