import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import '../UI/Card.css';
import NewExpense from '../NewExpense/NewExpense';
import { expensesContext } from '../../App';

function Expenses() {
  const { expenses, setExpenses } = useContext(expensesContext);
  function onEditTitle(arr){
    setExpenses([...arr]);
    console.log('arr: ', arr)
  }

  return (
    <Card className="expenses">
      <NewExpense />
      <div>
        {expenses.map((expense, idx) => {
          return (
            <li key={expense.id}>
              <ExpenseItem onEditTitle={onEditTitle} expense={expenses[idx]} />
            </li>
          );
        })}
      </div>
    </Card>
  );
}

export default Expenses;
