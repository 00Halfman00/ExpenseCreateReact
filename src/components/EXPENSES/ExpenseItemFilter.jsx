import React, { useState, createContext } from 'react';
import './ExpenseItemFilter.css';
import ExpenseYear from '../EXPENSEYEAR/ExpenseYear';

export const yearContext = createContext();


function ExpenseItemFilter(props) {
  let year;
  function yearHandler(ev) {
    year = props.getYear(ev.target.value);
  }

  return (
    <div className="expense-filter-container">
      <div className="expense-filter-div">
        <label>Filter Expenses By Year</label>
        <select onChange={yearHandler} className="filter-select">
          <option value="">choose a year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <ExpenseYear year={props.year}/>
    </div>
  );
}

export default ExpenseItemFilter;