import React from "react";
import classes from "./ChartStyles.module.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {

    const dataPointValues=props.datapoints.map(datapoint=>datapoint.value)
    const totalMaximum=Math.max(...dataPointValues)

  return (
    <div className={classes.chart}>
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          maxValue={totalMaximum}
          label={datapoint.label}
          value={datapoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
