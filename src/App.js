import React, { useState } from "react";
import classes from "../src/Components/Expenses/ExpenseItem.module.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    ammount: 94.12,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "New TV",
    ammount: 799.49,
    date: new Date(2021, 2, 12),
  },

  {
    id: "e3",
    title: "Car Insurance",
    ammount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    ammount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (data) => {
    setExpenses((pervState) => [data, ...pervState]);
  };

  return (
    <div className={classes.expenses}>
      <NewExpense onAddExpense={(data) => addExpenseHandler(data)} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
