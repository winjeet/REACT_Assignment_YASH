import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  //list of expense will be coming from back-end
  const expenses = [
    {id:1, title:"Airpod", date: new Date(2023,1,11), amount:5000},
    {id:2, title:"Tablet", date: new Date(2023,2,12), amount:10000}, 
    {id:3, title:"Phone", date: new Date(2023,3,13), amount:15000}
  ]

  return (
    <div className="App">
      {expenses.map((expense)=>{
        return <ExpenseItem key={expense.id} expense={expense}/>
      })}
    </div>
  );
}

export default App;
