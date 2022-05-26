import React, { useState, useRef, useContext } from 'react';
import ExpenseItemDate from './ExpenseItemDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { expensesContext } from '../../App';

function ExpenseItem(props) {
  const { expenses, setExpenses } = useContext(expensesContext);
  const [expenseItem, setExpenseItem] = useState(props.expense);
  const inputRef = useRef();

  function clickHandler(ev) {
    if(inputRef.current.value){
      for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id === expenseItem.id) {
          expenses[i].title = inputRef.current.value;
        }
        props.onEditTitle(expenses);
      }
      const name = inputRef.current.value;
      setExpenseItem(() => {
        return { ...expenseItem, title: name };
      });
      inputRef.current.value = '';
    }
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
