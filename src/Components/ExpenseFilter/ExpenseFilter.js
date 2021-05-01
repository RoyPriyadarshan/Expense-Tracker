import React from "react";
import classes from "./ExpenseFilterStyles.module.css";

const ExpenseFilter = (props) => {
  const onSelectHandler = (event) => {
    props.addFilterChange(event.target.value);
  };

  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilterControl}>
        <label>Filter by year</label>
        <select
          onChange={(event) => onSelectHandler(event)}
          value={props.selected}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
