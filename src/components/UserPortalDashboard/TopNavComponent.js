import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export  default class TopNav extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

                <NavLink to='/' className="navbar-brand mr-1">Control Panel</NavLink>

                {/*<button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">*/}
                    {/*<i className="fas fa-bars"></i>*/}
                {/*</button>*/}


                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    {/*<div className="input-group">*/}
                        {/*<input type="text" className="form-control" placeholder="Search for..." aria-label="Search"*/}
                               {/*aria-describedby="basic-addon2"/>*/}
                        {/*<div className="input-group-append">*/}
                            {/*<button className="btn btn-primary" type="button">*/}
                                {/*<i className="fas fa-search"></i>*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </form>


                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown no-arrow">
                        <NavLink to='/userportal/profile' className="nav-link dropdown-toggle"
                           aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-circle fa-fw"></i>
                        </NavLink>
                        {/*<div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">*/}
                            {/*<a className="dropdown-item" href="#">Settings</a>*/}
                            {/*<a className="dropdown-item" href="#">Activity Log</a>*/}
                            {/*<div className="dropdown-divider"></div>*/}
                            {/*<a className="dropdown-item" href="#" data-toggle="modal"*/}
                               {/*data-target="#logoutModal">Logout</a>*/}
                        {/*</div>*/}
                    </li>
                </ul>

            </nav>
        );
    }
}