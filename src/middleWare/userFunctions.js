import axios from 'axios';

export const login = user => {
    return axios
        .post('http://localhost:3000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            //localStorage.setItem('login', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
