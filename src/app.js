import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({description : "water bill" , amount : 4500 , createdAt : "ahmad" }));
// store.dispatch(addExpense({description : "gas bill" , amount : 1000 , createdAt : "ahmad yar" }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// } , 3000);
//
// const stat = store.getState();
// const res = getVisibleExpense(stat.expenses , stat.filters);
// console.log(res);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
