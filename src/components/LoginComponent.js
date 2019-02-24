import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import {userAuth, localToRedux} from '../actions/UserAuthenticate';
import {login} from '../middleWare/userFunctions';
import SimpleNavigation from "./Home/SimpleNavigationComponent";

class Login extends Component {
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

        const submitLoginForm = (e) => {
            e.preventDefault();
            if (this.state.email.trim() === '' || this.state.password.trim() === '') {
                this.setState(() => ({
                    error: 'Email or Password are Empty'
                }));
            } else {
                const user = {
                    email: this.state.email,
                    password: this.state.password
                }

                login(user).then(res => {
                    if (res) {
                        if (res.login == 'OK') {
                            this.setState(() => ({
                                error: ''
                            }));

                            // this.props.dispatch(userAuth(this.state.email, this.state.password));
                            let auth = {
                                id: res.res._id,
                                email: res.res.email,
                                password: res.res.password,
                                isAuth: true,
                                userName: res.res.name,
                                phoneNo: res.res.phoneNo,
                                address: res.res.address
                            };
                            this.props.dispatch(localToRedux(auth));
                            localStorage.setItem('userAuth', JSON.stringify(auth));
                            console.log(this.props.userAuth);
                            this.props.history.push('/');
                        } else {
                            this.setState(() => ({
                                error: res.login
                            }));
                        }

                    }
                })


            }
        }

        if (this.props.userAuth.isAuth == false) {
            try {
                var auth = localStorage.getItem('userAuth');
                auth = JSON.parse(auth);
                if (auth.isAuth) {
                    return <Redirect to={'/'}/>
                }
            } catch (e) {
                console.log(e);
                return (
                    <div>
                        <SimpleNavigation/>
                        <header className="masthead-login"
                                style={{padding: 0, backgroundImage: `url(${'./images/login.jpg'})`}}>

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
                                            <div style={{
                                                backgroundColor: 'white',
                                                opacity: 0.7,
                                                padding: 30,
                                                marginTop: 35
                                            }}>
                                                <form method='post' onSubmit={submitLoginForm}>

                                                    <div style={{color: '#A9A9A9'}}
                                                         className="intro-lead-in-login">Login
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text"
                                                              id="basic-addon1">{this.props.email}</span>
                                                        </div>
                                                        <input type="email"
                                                               onChange={val => updateEmail(val)}
                                                               className="form-control"
                                                               value={this.state.email}
                                                               aria-label="Username"
                                                               required={true}
                                                               aria-describedby="basic-addon1"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text"
                                                              id="basic-addon1">{this.props.password}</span>
                                                        </div>
                                                        <input type="password"
                                                               onChange={val => updatePassword(val)}
                                                               className="form-control"
                                                               aria-label="Username"
                                                               required={true}
                                                               aria-describedby="basic-addon1"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        {!!this.state.error ?
                                                            <p className="text-danger"
                                                               align="center" style={{fontSize: 10}}>{this.state.error}</p> : ''}
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
                                                    <NavLink to='/signup'>
                                                        <p style={{color: '#A9A9A9'}}>Create New Account ?</p>
                                                    </NavLink>
                                                </form>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                );
            }
        } else {
            return (
                <header className="masthead-login"
                        style={{padding: 0, backgroundImage: `url(${'./images/login.jpg'})`}}>
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

                                            <div style={{color: '#A9A9A9'}} className="intro-lead-in-login">Login</div>

                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                        <span className="input-group-text"
                                                              id="basic-addon1">{this.props.email}</span>
                                                </div>
                                                <input type="email"
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
                                                <div className="input-group-prepend">
                                                        <span className="input-group-text"
                                                              id="basic-addon1">{this.props.password}</span>
                                                </div>
                                                <input type="password"
                                                       onChange={val => updatePassword(val)}
                                                       className="form-control"
                                                       aria-label="Username"
                                                       required={true}
                                                       aria-describedby="basic-addon1"/>
                                            </div>
                                            <div className="input-group mb-3">
                                                {!!this.state.error ?
                                                    <p className="text-danger"
                                                       align="center" style={{fontSize: 10}}>{this.state.error}</p> : ''}
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
                                            <NavLink to='/signup'>
                                                <p style={{color: '#A9A9A9'}}>Create New Account ?</p>
                                            </NavLink>
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </header>
            );
        }

    }
}

const MapStatToProps = (state) => ({
    userAuth: state.userAuth,
    email: 'Email \xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    password: 'Password\xa0'
});

export default connect(MapStatToProps)(Login);