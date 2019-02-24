import React, {Component} from 'react';
import {register} from '../middleWare/userFunctions';
import SimpleNavigation from "./Home/SimpleNavigationComponent";
import {NavLink} from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            phoneNo: '',
            email: '',
            address: '',
            pass1: '',
            pass2: '',
            error: ''
        }
    }

    signupHandler = (e) => {
        e.preventDefault();
        if (this.state.userName.trim() == '' || this.state.phoneNo.trim() == '' ||
            this.state.email.trim() == '' || this.state.pass1.trim() == '' || this.state.pass2.trim() == '') {
            this.setState({
                error: 'Some field are empty'
            })
        } else if (this.state.pass1.length < 5 || this.state.pass2.length < 5) {
            this.setState({
                error: 'Password length must be greater than 4'
            })
        } else if (this.state.pass1 !== this.state.pass2) {
            this.setState({
                error: 'Both Password Mismatch'
            })
        } else {
            const user = {
                email: this.state.email,
                userName: this.state.userName,
                address: this.state.address,
                phoneNo: this.state.phoneNo,
                password: this.state.pass1
            }
            register(user).then(res => {
                if (res.reg == 'OK') {
                    this.setState({
                        error: 'Registration Sucessfully'
                    });

                    setTimeout(() => {
                        this.setState({
                            error: ''
                        });
                        this.props.history.push('/login');
                    }, 1000);

                } else {
                    this.setState({
                        error: res.reg
                    })
                }
            }).catch(err => {
                console.log(err);
                this.setState({
                    error: 'Some Network Problem. Try Again'
                })
            })
        }
    }

    changeName = (e) => {
        var userName = e.target.value;
        this.setState({
            userName
        });
    }

    changePhoneNo = (e) => {
        var phoneNo = e.target.value;
        this.setState({
            phoneNo
        });
    }

    changeEmail = (e) => {
        var email = e.target.value;
        this.setState({
            email
        })
    }

    changeAddress = (e) => {
        var address = e.target.value;
        this.setState({
            address
        })
    }

    changePassword1 = (e) => {
        var pass1 = e.target.value;
        this.setState({
            pass1
        })
    }

    changePassword2 = (e) => {
        var pass2 = e.target.value;
        this.setState({
            pass2
        })
    }

    render() {
        return (
            <header className="masthead-login signupHtml"
                    style={{padding: 0,backgroundImage: `url(${'./images/header-bg.jpg'})`}}>
                <SimpleNavigation/>
                <div className="container">

                    <div className='row' style={{width: '100%'}}>
                        <div className='col-md-4 intro-text-login'>
                            {/*<div className="intro-heading-login">{this.props.title}</div>*/}
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}} align="left">Smart</h2>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}} align="left">Fire</h2>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}} align="left">Alarm</h2>
                            <h2 className="intro-heading-login" style={{margin: 0, padding: 0}} align="left">System</h2>
                        </div>
                        <div className='col-md-3'></div>

                        <div className='col-md-5'>
                            <div className='intro-text-login'>
                                <div style={{backgroundColor: 'white', opacity: 0.7, padding: 35}}>
                                    <form action='post' onSubmit={this.signupHandler}>

                                        <h2 style={{color: '#A9A9A9'}} className='intro-lead-in-login'>Sign Up</h2>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"
                                                      id="basic-addon1">{this.props.userName}</span>
                                            </div>
                                            <input type="text" className="form-control" onChange={this.changeName}
                                                   aria-label="Username" aria-describedby="basic-addon1"
                                                   pattern="[A-Za-z0-9_ ]{3,12}"
                                                   title="UserName char between [3,12].Only use alphanumeric character, space and _ char"
                                                   minLength={3}
                                                   maxLength={12}
                                                   required={true}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"
                                                      id="basic-addon1">{this.props.phoneNo}</span>
                                            </div>
                                            <input type="text"
                                                   onChange={this.changePhoneNo}
                                                   className="form-control"
                                                   pattern="03[0-9]{9}"
                                                   title="For Example 03131539336"
                                                   aria-label="Username" aria-describedby="basic-addon1"
                                                   required={true}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"
                                                      id="basic-addon1">{this.props.email}</span>
                                            </div>
                                            <input type="email" className="form-control"
                                                   aria-label="Username"
                                                   pattern="[A-Za-z0-9_.]+@[a-z]{3,5}.[a-z]{3}"
                                                   title="For Example ahmedyar61@gmail.com"
                                                   onChange={this.changeEmail}
                                                   aria-describedby="basic-addon1" required={true}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"
                                                      id="basic-addon1">{this.props.address}</span>
                                            </div>
                                            <input type="text" className="form-control"
                                                   onChange={this.changeAddress}
                                                   minLength={12}
                                                   title="Min Length must be 12"
                                                   aria-label="Username" aria-describedby="basic-addon1"
                                                   required={true}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"
                                                      id="basic-addon1">{this.props.pass1}</span>
                                            </div>
                                            <input type="password" className="form-control"
                                                   onChange={this.changePassword1}
                                                   pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                                   title="Password must conatin UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                                   aria-label="Username" aria-describedby="basic-addon1"
                                                   required={true}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text"
                                                  id="basic-addon1">{this.props.pass2}</span>
                                            </div>
                                            <input type="password" className="form-control"
                                                   onChange={this.changePassword2}
                                                   pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                                   title="Password must conatin UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                                   aria-label="Username" aria-describedby="basic-addon1"
                                                   required={true}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            {
                                                !!this.state.error &&
                                                <p className='text-danger' style={{fontSize: 10}}>{this.state.error}</p>
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <button
                                                type='submit'
                                                className='btn btn-lg  form-control'
                                                style={{background: '#A9A9A9', color: 'white', height: 35}}
                                            >
                                                Signup
                                            </button>

                                        </div>
                                        <NavLink to={'/login'}>
                                            <p align="right" style={{fontSize: 9, color: 'blue', marginTop: -11}}>Login
                                                Now</p>
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

SignUp.defaultProps = {
    title: 'Smart \n Fire \n Alarm',
    userName: 'User Name \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    phoneNo: 'Phone No \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    email: 'Email \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    address: 'Address \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    pass1: 'Password \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
    pass2: 'Retype Password'

}

export default SignUp;