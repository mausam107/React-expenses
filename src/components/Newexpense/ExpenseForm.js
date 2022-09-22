import React from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <lable>Title</lable>
                <input type="text"></input>
            </div>
            <div className='new-expense__controls'>
                <lable>Amount</lable>
                <input type="number" min="0.01" step="0.01"></input>
            </div>
            <div className='new-expense__controls'>
                <lable>Date</lable>
                <input type="date" min="2019-01-01" max="2023-01-01"></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;