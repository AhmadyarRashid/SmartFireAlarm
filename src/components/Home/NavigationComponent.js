import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import Badge from '@material-ui/core/Badge';

const Navigation = (props) => (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top" style={{background:'#1A1919'}} id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" style={{color:'#A9A9A9'}} >Smart Fire Alarm System</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item" >
                        <a className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}}  href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}} href="#portfolio">Products</a>
                    </li>
                    {/*<li className="nav-item">*/}
                        {/*<a className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}} href="#about">About</a>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}} href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}} href="#contact">Contact</a>
                    </li>
                    {
                        props.userAuth.isAuth === true ?
                            <li className="nav-item">
                                <NavLink to='/showCart' className="nav-link js-scroll-trigger">
                                    {
                                        props.cart.length > 0 ?
                                            <Badge badgeContent={props.cart.length} color="primary">
                                                <i className='fas fa-fw fa-shopping-cart'  style={{color:'#A9A9A9'}} ></i>
                                            </Badge> :
                                            <i className='fas fa-fw fa-shopping-cart'  style={{color:'#A9A9A9'}}></i>
                                    }
                                </NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink to='/login' className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}}>
                                    Login
                                </NavLink>
                            </li>

                    }

                    {
                        props.userAuth.isAuth === true ?
                            <li className="nav-item">
                                <NavLink to='/userportal' className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}} >
                                    <i className='fas fa-fw fa-user'></i>
                                </NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink to='/signup' className="nav-link js-scroll-trigger" style={{color:'#A9A9A9'}}>
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