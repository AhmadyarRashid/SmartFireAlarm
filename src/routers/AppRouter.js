import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import CheckOut from '../components/Payment/Checkout';
import Dashboard from '../components/AdminDashboard/Dashboard';
import Home from '../components/Home/HomeComponent';
import Login from '../components/LoginComponent';
import Signup from '../components/SignUpComponent';
import Userportal from "../components/UserPortalDashboard/UserportalComponent";
import CartDetail from '../components/Home/CartDetailsComponent';
import {createBrowserHistory} from 'history';
import TestComponent from '../components/TestComponent';
import AdminLogin from '../components/AdminLoginComponent';
import ResetPass from '../components/ResetPasswordComponent';
import ForgetPassword from "../components/ForgetPassComponent";
import VerifyEmail from "../components/VerifyEmailComponent";

const histroy = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
        <div history={histroy}>
            {/*<Header />*/}
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path='/test' component={TestComponent}/>
                <Route path='/login' component={Login}/>
                <Route path='/admin' component={AdminLogin} exact={true}/>
                <Route path='/forgetPassword' component={ForgetPassword}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/userportal' component={Userportal}/>
                <Route path='/showCart' component={CartDetail}/>
                <Route path="/admin/dashboard" component={Dashboard}/>
                <Route path='/admin/addInventory' component={Dashboard}/>
                <Route path='/admin/customer' component={Dashboard}/>
                <Route path='/admin/complains' component={Dashboard}/>
                <Route path='/admin/query' component={Dashboard}/>
                <Route path='/admin/changePass' component={Dashboard}/>
                <Route path='/admin/sales' component={Dashboard}/>
                <Route path='/admin/serviceReport' component={Dashboard}/>
                <Route path="/payment" component={CheckOut}/>
                <Route path="/resetPassword/:id" component={ResetPass}/>
                <Route path="/verify/:id" component={VerifyEmail}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
