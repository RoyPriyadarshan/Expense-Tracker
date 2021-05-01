import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import classes from "./ExpensesListStyles.module.css";

const ExpensesList = (props) => {
    
  if (props.expenses.length === 0) {
    return <h2 className={classes.expensesListFallback}>No Expenses Found</h2>;
  }

  return (
    <div>
      <ul className={classes.expensesList}>
        {props.expenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              ammount={item.ammount}
              date={item.date}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpensesList;
