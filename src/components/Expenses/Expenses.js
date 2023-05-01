import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../Card";
import ExpensesChart from "./ExpensesChart";

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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
};

export default Expenses;