import React from 'react';
import './ExpenseItemDate.css'

function ExpenseItemDate(props) {
  //console.log('ExpenseItemDate: ', props)
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });
  const year = props.date.getFullYear();
  // keep as much of the computation outside of the return
  return (
    <div className="expense-item__date">
      <div className="expense-item__month">{month}</div>
      <div>{day}</div>
      <div className='expense-item__year'>{year}</div>
    </div>
  );
}

export default ExpenseItemDate;

