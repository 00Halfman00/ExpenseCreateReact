import React, { useState, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './NewExpenseForm.css';
import { expensesContext } from '../../App';

function NewExpenseForm() {
  const { expenses, setExpenses } = useContext(expensesContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.title = titleRef.current.value;
    data.amount = amountRef.current.value;
    data.date = dateRef.current.value;

    setNewExpenses({
      id: Math.floor(Math.random() * 1000),
      title: titleRef.current.value,
      amount: amountRef.current.value,
      date: dateRef.current.value,
    });

    if (
      titleRef.current.value &&
      amountRef.current.value &&
      dateRef.current.value
    ) {
      expenses[expenses.length] = {
        id: `${Math.floor(Math.random() * 1000)}`,
        title: titleRef.current.value,
        amount: +amountRef.current.value,
        date: new Date(dateRef.current.value),
      };
    }

    setExpenses([...expenses]);

    titleRef.current.value = '';
    amountRef.current.value = null;
    dateRef.current.value = null;
  };

  const [newExpenses, setNewExpenses] = useState({});
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-form-container">
          <div className="div-form-title">
            <label className="form-title-label">Title</label>
            <input
              {...register('title')}
              ref={titleRef}
              type="text"
              placeholder="..."
              className="form-input"
            />
          </div>
          <div className="div-form-amount">
            <label className="form-amount-label">Amount</label>
            <input
              {...register('amount')}
              ref={amountRef}
              type="number"
              className="form-input"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="div-form-date">
            <label className="form-date-label">Date</label>
            <input
              {...register('date')}
              ref={dateRef}
              type="date"
              className="form-input"
            />
          </div>
          <div className="div-form-button">
            <input className="form-button" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewExpenseForm;
