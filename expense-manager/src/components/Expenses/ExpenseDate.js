import React from 'react'
import "./ExpenseDate.css"

export default function ExpenseDate(props) {
    const day = props.date.getDate();
    const month = props.date.toLocaleString("en-us",{month : "long"});
    const year = props.date.getFullYear();

    return(
        <div>
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
            </div>
        </div>
    )
}
