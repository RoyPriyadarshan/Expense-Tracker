import React, { useState } from "react";
import classes from "./ExpenseFormStyles.module.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const ammountChangedHandler = (event) => {
    setAmmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      ammount: +ammount,
      date: new Date(date),
    };

    setTitle("");
    setAmmount("");
    setDate("");

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newExpenseControls}>
        <div className={classes.newExpenseControl}>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangedHandler} />
        </div>

        <div className={classes.newExpenseControl}>
          <label>Ammount</label>
          <input
            type="number"
            value={ammount}
            min="0.01"
            step="0.01"
            onChange={ammountChangedHandler}
          />
        </div>

        <div className={classes.newExpenseControl}>
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className={classes.newExpenseActions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
