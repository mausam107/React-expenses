import React from 'react';

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

  // return React.createElement('div',{},React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expense,{items:expenses})
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses} />
    </div>
  )
}

export default App;