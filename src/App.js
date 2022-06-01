import React, { useState, createContext } from 'react';
import Expenses from './components/EXPENSES/Expenses';
import './App.css';

export const expensesContext = createContext();


const expensesArr = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: '4K TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Desk (Wooden)',
    amount: 450.01,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(expensesArr);
  const [year, setYear] = useState();
  const obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
  };

  const [months, setMonths] = useState(obj);
  console.log('In App.jsx: ', expenses)
  return (
    <div>
      <div className="title-div">
        <h1>Expense Tracker</h1>
      </div>
      <expensesContext.Provider value={{ expenses, setExpenses, months, setMonths, year, setYear}}>
        <Expenses />
      </expensesContext.Provider>
    </div>
  );
}

export default App;
