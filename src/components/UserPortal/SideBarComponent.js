import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {userSignOut} from '../../actions/UserAuthenticate';


class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const SignOutHandler = () => {
            console.log('===============click on signOut Button==================');
            this.props.dispatch(userSignOut());
            console.log(this.props.userAuth);
            window.open('http://localhost:8080/' , '_self');
        }

        const redirectHome = () => {
            if (this.props.userAuth.isAuth == false) {

            }
        }

        return (
            <div>

                <ul className="sidebar navbar-nav">

                    <li className="nav-item">
                        <NavLink to='/userportal/' className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/userportal/changePassword' className="nav-link">
                            <i className="fas fa-fw fa-edit"></i>
                            <span>Change Password</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a onClick={SignOutHandler} className="nav-link">
                            <i className="fas fa-fw fa-sign-out-alt"></i>
                            <span>SignOut</span>
                        </a>
                    </li>

                </ul>
            </div>
        );
    }
}

const mapStatToProps = (state) => ({
    userAuth: state.userAuth
})

export default connect(mapStatToProps)(SideBar);