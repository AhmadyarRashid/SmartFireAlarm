// Store creation
import {combineReducers, createStore} from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import UserAuthReducer from '../reducers/UserAuthenticate';
import AddToCartReducer from '../reducers/Cart';
import MyOrder from '../reducers/myOrders';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            userAuth: UserAuthReducer,
            cart : AddToCartReducer,
            myOrder:MyOrder
        })
    );
    return store;
}
