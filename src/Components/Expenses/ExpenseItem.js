import React from "react";
import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className={classes.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.expenseItemDescription}>
        <h1>{props.title}</h1>
        <div className={classes.expenseItemPrice}>${props.ammount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
