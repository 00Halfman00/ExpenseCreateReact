import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './NewExpenseForm.css';

function NewExpenseForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.title = titleRef.current.value;
    data.amount = amountRef.current.value;
    data.date = dateRef.current.value;
    //console.log('data: ', data);

    setNewExpenses({
      title: titleRef.current.value,
      amount: amountRef.current.value,
      date: dateRef.current.value,
    });
    console.log('newExpenses state: ', newExpenses)
    titleRef.current.value = '';
    amountRef.current.value = null;
    dateRef.current.value = null;
  };
  const [newExpenses, setNewExpenses] = useState({
    id: Math.floor(Math.random() * 1000),
    title: ' ',
    amount: 0,
    date: new Date(),
  });
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-form-container">
          <div className="div-form-title">
            <label>Title</label>
            <input
              {...register('title')}
              ref={titleRef}
              type="text"
              placeholder="..."
              className="form-input"
            />
          </div>
          <div className="div-form-amount">
            <label>Amount</label>
            <input
              {...register('amount')}
              ref={amountRef}
              type="number"
              className="form-input"
            />
          </div>
          <div className="div-form-date">
            <label>Date</label>
            <input
              {...register('date')}
              ref={dateRef}
              type="date"
              className="form-input"
            />
          </div>
          <input className="form-button" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default NewExpenseForm;

//need Flex in css file
// time for a break
// that was a pain lol