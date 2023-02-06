import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

//list of expense will be coming from back-end
const initialExpenses = [
  { id: 1, title: "Airpod", date: new Date(2020, 1, 11), amount: 5000 },
  { id: 2, title: "Tablet", date: new Date(2021, 2, 12), amount: 10000 },
  { id: 3, title: "Phone", date: new Date(2019, 3, 13), amount: 15000 },
  { id: 4, title: "Rent", date: new Date(2021, 3, 13), amount: 8000 }
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      console.log(expense);
      return [expense, ...prevExpense]
    });
  };
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
