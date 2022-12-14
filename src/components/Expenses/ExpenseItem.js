import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from'../UI/Card';
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
    // const [title,setTitle]=useState(props.title);
    // const clickHandler=()=>{
    //     setTitle('updated');
    //     console.log(title);
    // };
    
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </Card> 
        </li>
            )
}

export default ExpenseItem;