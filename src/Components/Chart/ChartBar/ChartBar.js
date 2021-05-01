import React from "react";
import classes from "./ChartBarStyles.module.css";

const ChartBar = (props) => {
  let barFillHieght = "0%";
  if (props.maxValue > 0) {
    barFillHieght = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={classes.chartBar}>
      <div className={classes.chartBarInner}>
        <div
          className={classes.chartBarFill}
          style={{ height: barFillHieght }}
        ></div>
      </div>
      <div className={classes.chartBarLabel}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
