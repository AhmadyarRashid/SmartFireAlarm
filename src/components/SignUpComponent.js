import React, {Component} from 'react';
import {register} from '../middleWare/userFunctions';

export default class SignUp extends Component {
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
        }else if (this.state.pass1.length < 5 ||this.state.pass2.length < 5 ){
            this.setState({
                error: 'Password length must be greater than 4'
            })
        } else if (this.state.pass1 !== this.state.pass2) {
            this.setState({
                error: 'Both Password Mismatch'
            })
        } else {
            const user = {
                email : this.state.email,
                userName: this.state.userName,
                address : this.state.address,
                phoneNo : this.state.phoneNo,
                password: this.state.pass1
            }
            register(user).then(res => {
                if(res.reg == 'OK'){
                    this.setState({
                        error: 'Registration Sucessfully'
                    });

                    setTimeout(() => {
                        this.setState({
                            error: ''
                        });
                        this.props.history.push('/login');
                    }, 1000);

                }else{
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
            <header className="masthead-login"
                    style={{padding: 0, backgroundImage: `url(${'./images/header-bg.jpg'})`}}>
                <div className="container">

                    <div className='row' style={{width: '100%', height: '100%'}}>
                        <div className='col-md-4 intro-text-login'>
                            <div className="intro-heading-login text-uppercase">Smart Fire Alarm System</div>
                            <div className="intro-lead-in-login">Welcome in the Future</div>
                        </div>
                        <div className='col-md-4'></div>

                        <div className='col-md-4'>
                            <div className='intro-text-login'>
                                <form action='post' onSubmit={this.signupHandler}>

                                    <div className="intro-lead-in-login">Sign Up</div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">User Name :</span>
                                        </div>
                                        <input type="text" className="form-control" onChange={this.changeName}
                                               aria-label="Username" aria-describedby="basic-addon1" required={true}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Phone No :</span>
                                        </div>
                                        <input type="text"
                                               onChange={this.changePhoneNo}
                                               className="form-control"
                                               aria-label="Username" aria-describedby="basic-addon1" required={true}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Email : </span>
                                        </div>
                                        <input type="email" className="form-control"
                                               aria-label="Username"
                                               onChange={this.changeEmail}
                                               aria-describedby="basic-addon1" required={true}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Address : </span>
                                        </div>
                                        <input type="text" className="form-control"
                                               onChange={this.changeAddress}
                                               aria-label="Username" aria-describedby="basic-addon1" required={true}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Password : </span>
                                        </div>
                                        <input type="password" className="form-control"
                                               onChange={this.changePassword1}
                                               aria-label="Username" aria-describedby="basic-addon1" required={true}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"
                                                  id="basic-addon1">Retype Password : </span>
                                        </div>
                                        <input type="password" className="form-control"
                                               onChange={this.changePassword2}
                                               aria-label="Username" aria-describedby="basic-addon1" required={true}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        {
                                            !!this.state.error &&
                                            <p className='text-danger'>{this.state.error}</p>
                                        }
                                    </div>
                                    <div className="input-group mb-3" align="right">
                                        <button type='submit' className='btn btn-lg btn-primary form-control'>Signup
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}