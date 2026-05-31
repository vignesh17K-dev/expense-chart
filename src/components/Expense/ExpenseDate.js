function ExpenseDate(props) {
  const month = props.newdate.toLocaleString('en-US', { month: 'short' });
  const day = props.newdate.toLocaleString('en-US', { day: '2-digit' });
  const year = props.newdate.getFullYear();

  return (
    <div className="date-badge">
      <span className="date-badge__month">{month}</span>
      <span className="date-badge__day">{day}</span>
      <span className="date-badge__year">{year}</span>
    </div>
  );
}

export default ExpenseDate;
