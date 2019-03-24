import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
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


const histroy = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter >
    <div history={histroy}>
      {/*<Header />*/}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path='/test' component={TestComponent}/>
        <Route path='/login' component={Login} />
        <Route path='/admin/login' component={AdminLogin} />
        <Route path='/forgetPassword' component={ForgetPassword}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/userportal' component={Userportal}/>
        <Route path='/showCart' component={CartDetail} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/admin" component={Dashboard}/>
        <Route path="/help" component={HelpPage} />
        <Route path="/payment" component={CheckOut}/>
        <Route path="/resetPassword/:id" component={ResetPass}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
