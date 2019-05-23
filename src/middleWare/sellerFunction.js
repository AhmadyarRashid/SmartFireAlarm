import axios from 'axios';

export const addDevice = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/addDevice', {
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
        .post('https://fasserver.herokuapp.com/seller/getUser', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getAllQuery = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getAllQuery', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getQty = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getQty', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSummary = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getSummary', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSales = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getSales', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const sendReplyEmail = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/sendReply', {
            name: data.name,
            email: data.email,
            message: data.message,
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
        .post('https://fasserver.herokuapp.com/seller/login', {
            email: data.email,
            password: data.password
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
        .post('https://fasserver.herokuapp.com/seller/changePass', {
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

export const getAllReports = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getReports', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const sendReportUpdate = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/sendReportUpdate', {
            reportId: data.reportId,
            status: data.status,
            deviceName: data.deviceName,
            email: data.email,
            description: data.description
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSaleData = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getSaleData', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
};

export const getAllDevices = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getAllDevices', {})
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
};

export const getAllServiceReport = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/getAllServiceReport')
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
};

export const sendReplyToServiceReport = data => {
    return axios
        .post('https://fasserver.herokuapp.com/seller/sendReplyToServiceReport', {
            id: data.id,
            email: data.email,
            description: data.description,
            response: data.response
        })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        })
}