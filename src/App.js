import React from 'react';

import NewExpence  from './components/Newexpense/NewExpence';

import Expense from "./components/Expenses/Expense";


const App=() =>{
  const expenses=[
    {
      title:"Sandle",
      amount:"400",
      date:new Date(2021,2,20)
  
    },
    {
      title:"Dress",
      amount:"500",
      date:new Date(2022,5,20)
  
    },
    {
      title:"Fruits",
      amount:"600",
      date:new Date(2022,9,19)
  
    }
  ];

  const addExpenseeHandler=(expense)=>{
    console.log("In app");
    console.log(expense);
  }

  // return React.createElement('div',{},React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expense,{items:expenses})
  // );
  return (
    <div>
      <NewExpence onAddExpense={addExpenseeHandler} />
      <Expense items={expenses} />
    </div>
  )
}

export default App;
