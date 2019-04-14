import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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
import AddInventory from "../components/AdminDashBoardComponent/AddInventoryComponent";
import CustomerComponent from "../components/AdminDashBoardComponent/CustomerComponent";
import Complains from "../components/AdminDashBoardComponent/ComplainComponent";
import Query from "../components/AdminDashBoardComponent/UserQueryComponent";
import ChangePass from "../components/AdminDashBoardComponent/AdminChangePass";
import SaleComponent from "../components/AdminDashBoardComponent/SaleComponent";
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
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/admin/dashboard" component={Dashboard}/>
                <Route path='/admin/addInventory' component={Dashboard}/>
                <Route path='/admin/customer' component={Dashboard}/>
                <Route path='/admin/complains' component={Dashboard}/>
                <Route path='/admin/query' component={Dashboard}/>
                <Route path='/admin/changePass' component={Dashboard}/>
                <Route path='/admin/sales' component={Dashboard}/>
                <Route path="/help" component={HelpPage}/>
                <Route path="/payment" component={CheckOut}/>
                <Route path="/resetPassword/:id" component={ResetPass}/>
                <Route path="/verify/:id" component={VerifyEmail}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
