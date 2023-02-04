import React from 'react'
import "./ExpenseItem.css"

export default function ExpenseItem(props) {
    const expenseTitle = props.expense.title;
    const expenseAmount = props.expense.amount;
    const expenseDate = props.expense.date.toLocaleString("en-us",{month : "long"});

    return (
    <div className="expense-item">  
        <div>{expenseDate}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
        <div className="expense-item__price"><span>&#x20B9;</span>{expenseAmount}</div>
        </div>
    </div>
  )
}
