import React, {Component} from 'react';
import SimpleNavigation from './Home/SimpleNavigationComponent';
import {resetPassword, confirmResetUser} from '../middleWare/userFunctions';
import {NavLink} from "react-router-dom";

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPassword: '',
            confirmPassword: '',
            error: ''
        };

        this.submitResetForm = this.submitResetForm.bind(this)
    }

    componentWillMount() {
        confirmResetUser({
            id:  this.props.match.params.id
        }).then(res => {
            if (res.response === 'error'){
                window.open('http://localhost:8080/');
            }
        }).catch(e => {
            console.log(e);
        });
    }

    submitResetForm(e) {
        e.preventDefault();
        console.log(this.state);

        if (this.state.newPassword === this.state.confirmPassword) {
            this.setState({
                error: ''
            });

            resetPassword({
                id: this.props.match.params.id,
                password: this.state.newPassword
            }).then(res => {
                this.setState({
                    error: res.response
                });
                setTimeout(() => {
                    this.setState({
                        error: ''
                    });
                }, 1500);
            }).catch(e => {
                console.log(e);
            })
        } else {
            this.setState({
                error: 'Both Password field Mismatch'
            })
        }


    }

    newPasswordUpdate(e) {
        let newPassword = e.target.value;
        this.setState(() => ({
            newPassword
        }))
    }

    newConfirmPassword(e) {
        let confirmPassword = e.target.value;
        this.setState(() => ({
            confirmPassword
        }))
    }

    render() {
        return (
            <div>
                <SimpleNavigation/>
                <div className="container" style={{width: 500}}>
                    <form style={{marginTop: 120}} onSubmit={this.submitResetForm}>
                        <h2>RESET PASSWORD</h2>
                        <input type="password" className="form-control" placeholder="New Password"
                               value={this.state.newPassword} onChange={value => this.newPasswordUpdate(value)}/>
                        <input type="password" className="form-control" placeholder="Confirm Password"
                               value={this.state.confirmPassword} onChange={value => this.newConfirmPassword(value)}/>
                        {!!this.state.error ? <p className="text-danger"
                                                 align="center" style={{fontSize: 10}}>{this.state.error}</p> : ''}
                        <button
                            className="btn btn-outline-primary form-control"
                        >
                            Update Password
                        </button>
                        <div style={{marginTop: 10}}>
                            <NavLink to={'/login'}>
                                <p align="right" style={{fontSize: 9, color: 'blue', marginTop: -11}}>Login
                                    Now</p>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPassword;