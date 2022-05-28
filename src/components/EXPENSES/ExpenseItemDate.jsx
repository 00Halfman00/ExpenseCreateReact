import React from 'react';
import './ExpenseItemDate.css';
import {expensesContext} from '../../App';

function ExpenseItemDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });
  const year = props.date.toLocaleString('en-US', {year: 'numeric'});
  const classes = 'expense-item__date ' + month;

  console.log('month: ', month)

  return (
    <div className={classes}>
      <div className="expense-item__month">{month}</div>
      <div>{day}</div>
      <div className='expense-item__year'>{year}</div>
    </div>
  );
}

export default ExpenseItemDate;

