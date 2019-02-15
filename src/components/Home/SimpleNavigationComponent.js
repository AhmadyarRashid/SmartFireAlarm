import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {userSignOut} from "../../actions/UserAuthenticate";


const SimpleNavigation = (props) =>{

    const SignOutHandler = (props) => {
        console.log('===============click on signOut Button==================');
        props.dispatch(userSignOut());
        try{
            localStorage.removeItem('userAuth');
            localStorage.removeItem('cart');
        }catch (e) {
            console.log(e);
        }
        window.open('http://localhost:8080/', '_self');
    }
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top" id="mainNav">
            <div className="container">
                <NavLink to='/' className="navbar-brand js-scroll-trigger" href="#page-top">Smart Fire Alarm System</NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <a onClick={() => SignOutHandler(props)} className="nav-link js-scroll-trigger" href="#services">Logout</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}


const MapStatToProps = (state) => ({
    userAuth: state.userAuth,
    cart: state.cart
});

export default connect(MapStatToProps)(SimpleNavigation);