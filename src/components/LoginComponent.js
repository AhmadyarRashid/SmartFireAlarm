import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import {userAuth,localToRedux} from '../actions/UserAuthenticate';
import {login} from '../middleWare/userFunctions';

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
            console.log('============= form submit sucessfully ========\n', this.state.email, this.state.password);
            if (this.state.email.trim() === '' || this.state.password.trim() === '') {
                this.setState(() => ({
                    error: 'Email or Password are Empty'
                }));
            }else {
                const user = {
                    email: this.state.email,
                    password: this.state.password
                }

                login(user).then(res => {
                    if (res) {
                        console.log('================ login sucessfully ==========\n' , res);

                        this.setState(() => ({
                            error: ''
                        }));
                        // this.props.dispatch(userAuth(this.state.email, this.state.password));
                        let auth = {
                            email: this.state.email,
                            password:this.state.password,
                            isAuth: true,
                            userName:'Ahmad Yar',
                            phoneNo:'03131539336',
                            address:'Sector G-9/2 Islamabad'
                        };
                        this.props.dispatch(localToRedux(auth));
                        localStorage.setItem('userAuth', JSON.stringify(auth));
                        console.log(this.props.userAuth);
                        this.props.history.push('/');
                    }
                })



            }
        }

        if (this.props.userAuth.isAuth == false){
           try{
               var auth = localStorage.getItem('userAuth');
               auth = JSON.parse(auth);
               if(auth.isAuth){
                   return <Redirect to={'/'}/>
               }
           }catch (e) {
               console.log(e);
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
                                       <form method='post' onSubmit={submitLoginForm}>

                                           <div className="intro-lead-in-login">Login</div>

                                           <div className="input-group mb-3">
                                               <div className="input-group-prepend">
                                                   <span className="input-group-text" id="basic-addon1">Email</span>
                                               </div>
                                               <input type="email"
                                                      onChange={val => updateEmail(val)}
                                                      className="form-control"
                                                      value={this.state.email}
                                                      placeholder="Username"
                                                      aria-label="Username"
                                                      required={true}
                                                      aria-describedby="basic-addon1"/>
                                           </div>
                                           <div className="input-group mb-3">
                                               <div className="input-group-prepend">
                                                   <span className="input-group-text" id="basic-addon1">Password</span>
                                               </div>
                                               <input type="password"
                                                      onChange={val => updatePassword(val)}
                                                      className="form-control"
                                                      placeholder="Username"
                                                      aria-label="Username"
                                                      required={true}
                                                      aria-describedby="basic-addon1"/>
                                           </div>
                                           <div className="input-group mb-3">
                                               {!!this.state.error ?
                                                   <p className="text-danger" align="center">{this.state.error}</p> : ''}
                                           </div>

                                           <div className="input-group mb-3" align="right">
                                               <button
                                                   type='submit'
                                                   className='btn btn-lg btn-primary form-control'>
                                                   Login
                                               </button>
                                           </div>
                                           <NavLink to='/signup'><p className='text-warning'>Create New Account ?</p></NavLink>
                                       </form>
                                   </div>


                               </div>
                           </div>
                       </div>
                   </header>
               );
           }
        }else {
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
                                    <form method='post' onSubmit={submitLoginForm}>

                                        <div className="intro-lead-in-login">Login</div>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Email</span>
                                            </div>
                                            <input type="email"
                                                   onChange={val => updateEmail(val)}
                                                   className="form-control"
                                                   value={this.state.email}
                                                   placeholder="Username"
                                                   aria-label="Username"
                                                   required={true}
                                                   aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Password</span>
                                            </div>
                                            <input type="password"
                                                   onChange={val => updatePassword(val)}
                                                   className="form-control"
                                                   placeholder="Username"
                                                   aria-label="Username"
                                                   required={true}
                                                   aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            {!!this.state.error ?
                                                <p className="text-danger" align="center">{this.state.error}</p> : ''}
                                        </div>

                                        <div className="input-group mb-3" align="right">
                                            <button
                                                type='submit'
                                                className='btn btn-lg btn-primary form-control'>
                                                Login
                                            </button>
                                        </div>
                                        <NavLink to='/signup'><p className='text-warning'>Create New Account ?</p></NavLink>
                                    </form>
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
    userAuth: state.userAuth
});

export default connect(MapStatToProps)(Login);