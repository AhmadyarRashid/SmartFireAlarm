import axios from 'axios';

export const addDevice = data => {
    return axios
        .post('http://localhost:3000/seller/addDevice', {
            type: data.type,
            qty: data.qty
        })
        .then(res => {
            //localStorage.setItem('login', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUser = data => {
    return axios
        .post('http://localhost:3000/seller/getUser', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getAllQuery = data => {
    return axios
        .post('http://localhost:3000/seller/getAllQuery', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getQty = data => {
    return axios
        .post('http://localhost:3000/seller/getQty', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSummary = data => {
    return axios
        .post('http://localhost:3000/seller/getSummary', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSales = data => {
    return axios
        .post('http://localhost:3000/seller/getSales', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const sendReplyEmail = data => {
    return axios
        .post('http://localhost:3000/seller/sendReply' , {
            name : data.name,
            email : data.email,
            message : data.message,
            replySms: data.reply
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const adminLogin = data => {
    return axios
        .post('http://localhost:3000/seller/login' , {
            email : data.email,
            password : data.password
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const changePassword = data => {
    return axios
        .post('http://localhost:3000/seller/changePass', {
            email: data.email,
            oldPass: data.oldPass,
            newPass: data.newPass
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}