import React, { useState } from 'react'
import "./ExpenseForm.css"

export default function ExpenseForm(props) {
    // const [enteredTitle,setEnteredTitle] = useState("");
    // const [enteredAmount,setEnteredAmount] = useState("");
    // const [enteredDate,setEnteredDate] = useState("");
    const [userInput, setUserInput] = useState({
        enteredTitle: "", enteredAmount: "", enteredDate: ""
    })

    const titleChangeHandler = (event) => {
        //console.log(event.target.value);
        //setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    }
    const amountChangeHandler = (event) => {
        //console.log(event.target.value);
        //setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        //console.log(event.target.value);
        //setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        //console.log(newExpense);
        // setEnteredTitle("");
        // setEnteredAmount("");
        // setEnteredDate("");
        props.onSaveExpenseData(newExpense);
        setUserInput({
            enteredTitle: "", enteredAmount: "", enteredDate: ""
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} value={userInput.enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler} value={userInput.enteredDate} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}
