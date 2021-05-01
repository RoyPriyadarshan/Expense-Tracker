import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import classes from "./NewExpenseStyles.module.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const formShowHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className={classes.newExpense}>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={(data) => saveExpenseDataHandler(data)}
          onCancel={formShowHandler}
        />
      ) : (
        <button type="button" onClick={formShowHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
