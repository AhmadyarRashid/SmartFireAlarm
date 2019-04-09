import React, {Component} from 'react';
import SimpleNavigation from './Home/SimpleNavigationComponent';
import {adminLogin} from '../middleWare/sellerFunction';
import {connect} from 'react-redux';
import {adminLoginAction} from '../actions/adminAuth';
import {NavLink} from "react-router-dom";

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            isAuth: false
        }
    }

    render() {
        const updateEmail = val => {
            var email = val.target.value;
            this.setState(() => ({
                email
            }))
        }
        const updatePassword = val => {
            var password = val.target.value;
            this.setState(() => ({
                password
            }));
        }
        const submitLoginForm = e => {
            e.preventDefault();
            console.log(this.state);

            if (this.state.email.trim() == "" || this.state.password.trim() == "") {
                this.setState({
                    error: 'Some field are empty'
                })
            } else {
                this.setState({
                    error: 'Some field are empty'
                })
                adminLogin({
                    email: this.state.email,
                    password: this.state.password
                }).then(res => {
                    if (res.al == 'OK') {
                        this.setState({
                            error: 'Login Sucessfully'
                        })

                        setTimeout(() => {
                            this.props.dispatch(adminLoginAction({
                                email: this.state.email,
                                password: this.state.password
                            }));

                            this.props.history.push('/admin/dashboard');
                            // this.setState({
                            //     email: '',
                            //     password: '',
                            //     error: '',
                            //     isAuth: false
                            // })
                        }, 1000);
                    } else if (res.al == 'notFound') {
                        this.setState({
                            error: 'Email or password are wrong'
                        })
                    } else {
                        this.setState({
                            error: 'Some network issue'
                        })
                    }
                }).catch(e => {
                    this.setState({
                        error: 'Some network issue'
                    })
                })

            }

        }

        return (
            <header className="masthead-login"
                    style={{padding: 0, backgroundImage: `url(${'http://localhost:8080/images/login.jpg'})`}}>
                <SimpleNavigation/>
                <div className="container">

                    <div className='row' style={{width: '100%', height: '100%'}}>
                        <div className='col-md-4 intro-text-login'>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}}
                                align="left">Smart</h2>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}}
                                align="left">Fire</h2>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}}
                                align="left">Alarm</h2>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}}
                                align="left">System</h2>

                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-5'>
                            <div className='intro-text-login'>
                                <div style={{backgroundColor: 'white', opacity: 0.7, padding: 30, marginTop: 35}}>
                                    <form method='post' onSubmit={submitLoginForm}>

                                        <div style={{color: '#A9A9A9'}} className="intro-lead-in-login">Admin Login
                                        </div>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                        <span className="input-group-text"
                                                              id="basic-addon1">{this.props.email}</span>
                                            </div>
                                            <input
                                                type="email"
                                                onChange={val => updateEmail(val)}
                                                className="form-control"
                                                pattern="[A-Za-z0-9_.]+@[a-z]{3,5}.[a-z]{3}"
                                                title="For Example ahmedyar61@gmail.com"
                                                value={this.state.email}
                                                aria-label="Username"
                                                required={true}
                                                aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div
                                                className="input-group-prepend">
                                                        <span className="input-group-text"
                                                              id="basic-addon1">{this.props.password}</span>
                                            </div>
                                            <input
                                                type="password"
                                                onChange={val => updatePassword(val)}
                                                className="form-control"
                                                aria-label="Username"
                                                required={true}
                                                aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            {!!this.state.error ?
                                                <p
                                                    className="text-danger"
                                                    align="center"
                                                    style={{fontSize: 10}}>{this.state.error}</p> : ''}
                                        </div>

                                        <div className="input-group mb-3" align="right">
                                            <button
                                                type='submit'
                                                className='btn btn-lg form-control'
                                                style={{background: '#A9A9A9', color: 'white', height: 35}}
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div style={{marginTop: 10}}>
                                            <NavLink to={'/forgetPassword'}>
                                                <p align="right" style={{fontSize: 9, color: 'blue', marginTop: -11}}>Forget Password ?
                                                </p>
                                            </NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

AdminLogin.defaultProps = {
    email: 'Email \xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    password: 'Password\xa0'
}
const mapStatToProps = state => ({
    adminAuth: state.adminAuth
})

export default connect(mapStatToProps)(AdminLogin);