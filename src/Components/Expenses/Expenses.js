import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const onFilterChangeHandler = (data) => {
    setFilterYear(data);
  };

  return (
    <div>
      <ExpenseFilter
        selected={filterYear}
        addFilterChange={(data) => onFilterChangeHandler(data)}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
