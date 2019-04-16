// Store creation
import {combineReducers, createStore} from "redux";
import UserAuthReducer from '../reducers/UserAuthenticate';
import AddToCartReducer from '../reducers/Cart';
import MyOrder from '../reducers/myOrders';
import Users from '../reducers/users';
import Query from '../reducers/query';
import Sales from '../reducers/sales';
import adminAuth from '../reducers/adminAuthentication';
import reports from '../reducers/reports';
import devices from '../reducers/devices';
import serviceReports from '../reducers/serviceReports';

export default () => {
    const store = createStore(
        combineReducers({
            userAuth: UserAuthReducer,
            cart: AddToCartReducer,
            myOrder: MyOrder,
            users: Users,
            query: Query,
            sales: Sales,
            adminAuth: adminAuth,
            reports: reports,
            devices: devices,
            serviceReports:serviceReports
        })
    );
    return store;
}
