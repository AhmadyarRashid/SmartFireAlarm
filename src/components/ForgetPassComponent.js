import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink ,Redirect} from 'react-router-dom';
import SimpleNavigation from "./Home/SimpleNavigationComponent";
import {forgetPassword} from '../middleWare/userFunctions'

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: '',
            isAuth: false
        }
    }

    render() {
        const updateEmail = val => {
            let email = val.target.value;
            this.setState(() => ({
                email
            }))
        };

        const submitForgetForm = (e) => {
            e.preventDefault();
            forgetPassword({email:this.state.email})
                .then(res =>{
                    if(res.error){
                        this.setState({
                            error: res.error
                        });
                    }
                })
                .catch(e => {
                    console.log(e)
                })

        };

        if (this.props.userAuth.isAuth === false) {
            try {
                let auth = localStorage.getItem('userAuth');
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
                                                <form method='post' onSubmit={submitForgetForm}>

                                                    <div style={{color: '#A9A9A9'}}
                                                         className="intro-lead-in-login">Forget Password
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
                                                            Submit Request
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
                                        <form method='post' onSubmit={submitForgetForm}>

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
                                                    Submit Request
                                                </button>
                                            </div>
                                            <div style={{marginTop: 10}}>
                                                <NavLink to={'/login'}>
                                                    <p align="right" style={{fontSize: 9, color: 'blue', marginTop: -11}}>Login
                                                        Now</p>
                                                </NavLink>
                                            </div>
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
    email: 'Email \xa0\xa0\xa0\xa0\xa0\xa0\xa0'

});

export default connect(MapStatToProps)(ForgetPassword);