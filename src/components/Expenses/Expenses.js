import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../Card";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterExpenses = (filterDate) => {
        const dateFilter = filterDate;
        setFilteredYear(dateFilter);
        console.log(dateFilter);
    }

    const filteredExpenses = props.items.filter(
        expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    );

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterDateChange={filterExpenses} year={filteredYear} />
            {filteredExpenses.map((expense) => {
                return (<ExpenseItem 
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />
                )})
            }
        </Card>
    )
};

export default Expenses;