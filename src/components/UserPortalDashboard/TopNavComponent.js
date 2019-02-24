import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class TopNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const goHomeHandler = () => {
            window.open('http://localhost:8080/', '_self');
        }
        return (
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" style={{background: '#1A1919'}}>

                <a
                    onClick={goHomeHandler}
                    className="navbar-brand"
                    style={{color: '#A9A9A9' , fontSize: 20}}
                >Smart Fire Alarm System</a>

                {/*<button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">*/}
                {/*<i className="fas fa-bars"></i>*/}
                {/*</button>*/}


                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

                </form>


                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown no-arrow">
                        <NavLink to='/userportal/profile' className="nav-link dropdown-toggle"
                                 aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-circle fa-fw"></i>
                        </NavLink>
                    </li>
                </ul>

            </nav>


        );
    }
}