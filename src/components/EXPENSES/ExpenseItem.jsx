import React, { useState, useRef, useContext } from 'react';
import ExpenseItemDate from './ExpenseItemDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { expensesContext } from '../../App';

function ExpenseItem(props) {
  const { expenses, setExpenses } = useContext(expensesContext);
  const inputRef = useRef();

  function clickHandler(ev) {
    if (inputRef.current.value) {
      for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id === props.expense.id) {
          expenses[i].title = inputRef.current.value;
        }
        props.onEditTitle(expenses);
      }
      inputRef.current.value = '';
    }
  }

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.expense.date} />
      <div className="expense-item__title">
        <p className="expense-item-p">{props.expense.title}</p>
      </div>
      <input ref={inputRef} className="title-input"></input>
      <button className="expense-item-button" onClick={clickHandler}>
        rename
      </button>
      <div className="expense-item__amount">${props.expense.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
