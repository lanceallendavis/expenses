import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 33,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 42,

    title: 'Internet',
    amount: 79.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 31,
    title: 'Food',
    amount: 159.49,
    date: new Date(2022, 3, 28),
  },
  {
    id: 42,

    title: 'Internet',
    amount: 79.99,
    date: new Date(2022, 4, 28),
  },
  {
    id: 31,
    title: 'Food',
    amount: 159.49,
    date: new Date(2022, 4, 28),
  },
  {
    id: 42,

    title: 'Food',
    amount: 79.99,
    date: new Date(2022, 4, 28),
  },
  {
    id: 31,
    title: 'Food',
    amount: 159.49,
    date: new Date(2022, 6, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {return [expense, ...prevExpenses]})
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
