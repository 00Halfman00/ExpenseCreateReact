import React, { useContext } from 'react';
import { expensesContext } from '../../App';
import './ExpenseYear.css';

function ExpenseYear() {
  const { months } = useContext(expensesContext);

  return (
    <div>
      <div className="filter-year-container">
        <div className="filter-year-div">
          <div className="winter">
            {months['1']}
            <p>Jan</p>
          </div>
          <div className="winter">
            {months['2']}
            <p>Feb</p>
          </div>
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
