import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import TopNav from './TopNavComponent';
import SideBar from './SideBarComponent';
import Footer from './FooterComponent';
import {routes} from  '../UserPortal/UserDashBoardRoutes';


export default class Userportal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter history={this.props.history}>
                <div>
                    <div id="page-top">
                        <TopNav/>

                        <div id="wrapper">
                            <SideBar/>
                            <div id="content-wrapper">
                                <div className="container-fluid">

                                    {routes.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.main}
                                        />
                                    ))}
                                </div>
                                <Footer/>

                            </div>


                        </div>


                    </div>
                </div>
            </BrowserRouter>
        )
    }
}