import React, { useState, useContext, useEffect } from 'react';
import './ExpenseItemFilter.css';
import ExpenseYear from '../EXPENSEYEAR/ExpenseYear';
import { expensesContext } from '../../App';

function ExpenseItemFilter() {
  const { months, setMonths, year, setYear, expenses } =
    useContext(expensesContext);

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

  useEffect(() => {
    months[
      expenses[expenses.length - 1].date.toLocaleString('en-Us', {
        month: 'numeric',
      })
    ] += 1;
    setMonths(() => {
      return { ...months };
    });
  }, [expenses]);

  function yearHandler(ev) {
    setYear(+ev.target.value);

    for (let idx = 0; idx < expenses.length; ++idx) {
      if (
        ev.target.value ===
        expenses[idx].date.toLocaleString('en-Us', { year: 'numeric' })
      ) {
        obj[
          expenses[idx].date.toLocaleString('en-Us', { month: 'numeric' })
        ] += 1;
      }
    }
    setMonths(obj);
  }

  return (
    <div className="expense-filter-container">
      <div className="expense-filter-div">
        <label className="expense-filter-label">Filter By Year</label>
        <select onChange={yearHandler} className="filter-select">
          <option>chose year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <ExpenseYear />
    </div>
  );
}

export default ExpenseItemFilter;
