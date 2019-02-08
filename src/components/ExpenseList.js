import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpense from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h2>this is expense list</h2>
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id}  {...expense}/>
            })
        }
        {/*<ExpenseListItem expenses={props.expenses}/>*/}
    </div>
);

const MapStatToProps = (state) => {
    return {
        expenses : selectedExpense(state.expenses , state.filters)
        // expenses: state.expenses,
        // filters: state.filters
    };
};


export default connect(MapStatToProps)(ExpenseList);