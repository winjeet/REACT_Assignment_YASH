import React from 'react'
import Card from '../UI/Card';
import "./Expenses.css"
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
    const { expenses } = props; //const { expenses } = props.expenes; both are same
    return (
        <Card className="expenses">
        {expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
        })}
        </Card>
    );
}
