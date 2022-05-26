import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import '../UI/Card.css';
import NewExpense from '../NewExpense/NewExpense';
import { expensesContext } from '../../App';
import ExpenseItemFilter from './ExpenseItemFilter';

function Expenses() {
  const [year, setYear] = useState(0);
  const { expenses, setExpenses } = useContext(expensesContext);
  function onEditTitle(arr){
    setExpenses([...arr]);
  }

  function getYearHandler(year){
    setYear(year)
    console.log(year)
  }

  return (
    <div>
      <Card className="expenses">
      <NewExpense />
      <ExpenseItemFilter getYear={getYearHandler} />
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
    </div>
  );
}

export default Expenses;
