import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import '../UI/Card.css';
import NewExpense from '../NewExpense/NewExpense';
import { expensesContext } from '../../App';
import ExpenseItemFilter from './ExpenseItemFilter';

function Expenses() {
  const { year, setYear, expenses, setExpenses } = useContext(expensesContext);

  function onEditTitle(arr) {
    setExpenses([...arr]);
  }

  function getYearHandler(year) {
    setYear(year);
  }

  const listExpenses = (
    <div>
      {expenses.map((expense, idx) => {
        if (expense.date.getFullYear() === year) {
          return (
            <li key={expense.id}>
              <ExpenseItem onEditTitle={onEditTitle} expense={expenses[idx]} />
            </li>
          );
        }
      })}
    </div>
  );

  return (
    <div>
      <Card className="expenses">
        <NewExpense />
        <ExpenseItemFilter />
        {year ? listExpenses : null}
      </Card>
    </div>
  );
}

export default Expenses;

/*
{expenses.map((expense, idx) => {
            return (
              <li key={expense.id}>
                <ExpenseItem
                  onEditTitle={onEditTitle}
                  expense={expenses[idx]}
                />
              </li>
            );
          })}
          */
