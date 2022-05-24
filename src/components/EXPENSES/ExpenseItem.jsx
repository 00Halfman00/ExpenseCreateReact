import React, { useState, useRef } from 'react';
import ExpenseItemDate from './ExpenseItemDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
//console.log('React: ', React);

function ExpenseItem(props) {
  //console.log(typeof props.expense)
  const [expenseItem, setExpenseItem] = useState(props.expense);
  const inputRef = useRef();

  function clickHandler(ev) {
    setExpenseItem({ ...expenseItem, title: inputRef.current.value });
    inputRef.current.value = '';
  }

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={expenseItem.date} />
      <div className="expense-item__title">{expenseItem.title}</div>
      <input ref={inputRef}></input>
      <button onClick={clickHandler}>change</button>
      <div className="expense-item__amount">${expenseItem.amount}</div>
    </Card>
  );
}

export default ExpenseItem;


// onChange ? food lol