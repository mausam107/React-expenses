import React ,{useState}from 'react';

import NewExpence  from './components/Newexpense/NewExpence';

import Expense from "./components/Expenses/Expense";

const Dummy_expenses=[
  {
    id:'1',
    title:"Sandle",
    amount:"400",
    date:new Date(2021,2,20)

  },
  {
    id:'2',
    title:"Dress",
    amount:"500",
    date:new Date(2022,5,20)

  },
  {
    id:'3',
    title:"Fruits",
    amount:"600",
    date:new Date(2022,9,19)

  }
];


const App=() =>{
  const [expenses,setExpenses]=useState(Dummy_expenses);

  const addExpenseHandler=(expense)=>{
    console.log("In app");
    console.log(expense);
    setExpenses(preExpense=>{
      return [expense,...preExpense]
    })
  }

  // return React.createElement('div',{},React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expense,{items:expenses})
  // );
  return (
    <div>
      <NewExpence onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  )
}

export default App;
