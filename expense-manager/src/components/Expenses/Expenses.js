import React, { useState } from 'react'
import Card from '../UI/Card';
import "./Expenses.css"
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const { expenses } = props; //const { expenses } = props.expenes; both are same

    const filterChangeHandler = (selectedYear) => {
        // console.log("Expenses.js");
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expensesContent = <p>No Expenses found</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expensesContent}
        </Card>
    );
}
