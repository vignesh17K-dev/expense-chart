import ExpenseDate from './ExpenseDate';

function formatCurrency(price) {
  return parseFloat(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

function ExpenseCard(props) {
  return (
    <div className="expense-card">
      <div className="expense-card__left">
        <ExpenseDate newdate={props.date} />
        <h2 className="expense-card__title">{props.title}</h2>
      </div>
      <span className="expense-card__price">
        {formatCurrency(props.price)}
      </span>
    </div>
  );
}

export default ExpenseCard;
