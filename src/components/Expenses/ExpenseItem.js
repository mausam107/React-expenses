import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from'../UI/Card';
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
    const [title,setTitle]=useState(props.title);
    const clickHandler=()=>{
        setTitle('updated');
        console.log(title);
    };
    
    return <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
    </Card> 
}

export default ExpenseItem;