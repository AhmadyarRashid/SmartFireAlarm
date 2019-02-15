import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const Navigation = (props) => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Smart Fire Alarm System</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                    {
                        props.userAuth.isAuth === true ?
                            <li className="nav-item">
                                <NavLink to='/showCart' className="nav-link js-scroll-trigger">
                                    {
                                        props.cart.length > 0 ?
                                            <Badge badgeContent={props.cart.length} color="secondary">
                                                <i className='fas fa-fw fa-shopping-cart'></i>
                                            </Badge> :
                                            <i className='fas fa-fw fa-shopping-cart'></i>
                                    }
                                </NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink to='/login' className="nav-link js-scroll-trigger">
                                    Login
                                </NavLink>
                            </li>

                    }

                    {
                        props.userAuth.isAuth === true ?
                            <li className="nav-item">
                                <NavLink to='/userportal' className="nav-link js-scroll-trigger">
                                    <i className='fas fa-fw fa-user'></i>
                                </NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink to='/signup' className="nav-link js-scroll-trigger">
                                    Signup
                                </NavLink>
                            </li>

                    }

                </ul>
            </div>
        </div>
    </nav>
//     < li className="nav-item">
//     <NavLink to='/signup'><a className="nav-link js-scroll-trigger">Signup</a></NavLink>
// </li>
);


const MapStatToProps = (state) => ({
    userAuth: state.userAuth,
    cart: state.cart
});

export default connect(MapStatToProps)(Navigation);