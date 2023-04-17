import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formIsShown, showForm] = useState(false);
    const [addExpenseIsShown, showNewExpense] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const showFormHandler = () => {
        showForm(!formIsShown);
        showNewExpense(!addExpenseIsShown);
    }

    const hideFormHandler = () => {
        showForm(!formIsShown);
        showNewExpense(!addExpenseIsShown);
    }
    
    let formContent = (<div></div>);

    if(formIsShown) {
        formContent = (
            <ExpenseForm onCancel={hideFormHandler} onSaveExpenseData={saveExpenseDataHandler} />
        );
    }

    let addExpenseContent = (<button className="new-expense__button" onClick={showFormHandler}>Add New Expense</button>);
    if (!addExpenseIsShown) {
        addExpenseContent = (<div></div>);
    }

    return (
        <div className="new-expense">
            {formContent}
            {addExpenseContent}
        </div>
    )
}

export default NewExpense;