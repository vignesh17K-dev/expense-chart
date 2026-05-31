import './ExpenseForm.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function ExpenseForm({ ontransfer, alwaysOpen = false }) {
  const navigate = useNavigate();
  const [currtext, updatetext] = useState('');
  const [curramount, updateamount] = useState('');
  const [currdate, updatedate] = useState('');
  const [currexpcard, showexpcard] = useState(alwaysOpen);

  function update(event) {
    event.preventDefault();
    const newdata = {
      title: currtext,
      price: parseFloat(curramount),
      date: new Date(currdate),
    };
    ontransfer(newdata);
    updatetext('');
    updateamount('');
    updatedate('');
    if (!alwaysOpen) {
      showexpcard(false);
    }
  }

  function expcard() {
    showexpcard(true);
  }

  function cancel() {
    if (alwaysOpen) {
      navigate(-1);
    } else {
      showexpcard(false);
      updatetext('');
      updateamount('');
      updatedate('');
    }
  }

  if (alwaysOpen || currexpcard) {
    return (
      <div className="expense-form">
        <div className="expense-form__card">
          <h2 className="expense-form__heading">Add New Expense</h2>
          <form onSubmit={update}>
            <div className="expense-form__field">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={currtext}
                onChange={(event) => updatetext(event.target.value)}
                placeholder="e.g. Groceries"
                required
              />
            </div>

            <div className="expense-form__row">
              <div className="expense-form__field">
                <label htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={curramount}
                  onChange={(event) => updateamount(event.target.value)}
                  placeholder="0.00"
                  required
                />
              </div>

              <div className="expense-form__field">
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  value={currdate}
                  onChange={(event) => updatedate(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="expense-form__actions">
              <button type="button" className="btn-secondary" onClick={cancel}>
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Add Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-form">
      <button className="expense-form__toggle" onClick={expcard}>
        <FiPlus />
        Add New Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
