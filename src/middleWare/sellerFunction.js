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
        .post('http://localhost:3000/seller/getUser',{})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getQty = data => {
    return axios
        .post('http://localhost:3000/seller/getQty',{})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}