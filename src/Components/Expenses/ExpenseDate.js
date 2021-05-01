import React from 'react'
import classes from './ExpenseDateStyle.module.css'

const ExpenseDate = (props) => {

    const month = props.date.toLocaleDateString('en-US', { month: 'long' })
    const day = props.date.toLocaleDateString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div className={classes.expenseDate}>
            <div className={classes.expensDateMonth}>{month}</div>
            <div className={classes.expensDateYear}>{year}</div>
            <div className={classes.expensDateDay}>{day}</div>
        </div>
    )
}

export default ExpenseDate
