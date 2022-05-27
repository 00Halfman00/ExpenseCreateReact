import React, { useState, useContext } from 'react';
import { expensesContext } from '../../App';
import './ExpenseYear.css';

function ExpenseYear(props) {
  const { expenses } = useContext(expensesContext);
  const [months, setMonths] = useState({});

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

  for (let idx = 0; idx < expenses.length; ++idx) {
    if (
      props.year ===
      expenses[idx].date.toLocaleString('en-Us', { year: 'numeric' })
    ) {
      obj[
        expenses[idx].date.toLocaleString('en-Us', { month: 'numeric' })
      ] += 1;
    }
  }

  function monthsHandler() {
    setMonths(obj);
  }

  console.log(months);

  return (
    <div>
      <div className="filter-year-button-div">
        <button className="filter-year-button" onClick={monthsHandler}>
          display {props.year}
        </button>
      </div>
      <div className='filter-year-container'>
        <div className="filter-year-div">
          <div className="winter">
            {months['1']}
            <p>Jan</p>
          </div>
          <di className="winter">
            {months['2']}
            <p>Feb</p>
          </di>
          <div className="spring">
            {months['3']}
            <p>Mar</p>
          </div>
          <div className="spring">
            {months['4']}
            <p>Apr</p>
          </div>
          <div className="spring">
            {months['5']}
            <p>May</p>
          </div>
          <div className="summer">
            {months['6']}
            <p>Jun</p>
          </div>
          <div className="summer">
            {months['7']}
            <p>Jul</p>
          </div>
          <div className="summer">
            {months['8']}
            <p>Aug</p>
          </div>
          <div className="fall">
            {months['9']}
            <p>Sep</p>
          </div>
          <div className="fall">
            {months['10']}
            <p>Oct</p>
          </div>
          <div className="fall">
            {months['11']}
            <p>Nov</p>
          </div>
          <div className="winter">
            {months['12']}
            <p>Dec</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseYear;
