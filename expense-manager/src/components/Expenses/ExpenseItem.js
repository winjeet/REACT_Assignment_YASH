import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"

export default function ExpenseItem(props) {
    //const expenseTitle = props.expense.title;
    const expenseAmount = props.expense.amount;
    //const expenseDate = props.expense.date.toLocaleString("en-us",{month : "long"});
    //let {title} = props.expense; 
    const [title,setTitle] = useState(props.expense.title);
    const updateHandler=()=>{
       setTitle("Updated value");
    }

    return (
    <Card className="expense-item">  
        <ExpenseDate date={props.expense.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
        <div className="expense-item__price"><span>&#x20B9;</span>{expenseAmount}</div>
        </div>
        
    </Card>
  )
}
