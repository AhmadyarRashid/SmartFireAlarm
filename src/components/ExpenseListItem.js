import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <h1>{description}</h1>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;


//const ExpenseListItem =(props) => (
//     <div>
//         Hello Items
//         {
//             props.expenses.map((Expense) => {
//               return  <p key={Expense.id}>{Expense.description}</p>;
//             })
//         }
//     </div>
// );