import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import '../UI/Card.css';
import NewExpense from '../NewExpense/NewExpense';
import { expensesContext } from '../../App';

function Expenses() {
  const { expenses, setExpense } = useContext(expensesContext);

  return (
    <Card className="expenses">
      <NewExpense />
      <div>
        {expenses.map((expense, idx) => {
          return (
            <li key={expense.id}>
              <ExpenseItem expense={expenses[idx]} />
            </li>
          );
        })}
      </div>
    </Card>
  );
}

export default Expenses;
