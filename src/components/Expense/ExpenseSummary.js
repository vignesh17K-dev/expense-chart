import { FiDollarSign, FiList, FiTrendingUp } from 'react-icons/fi';
import './ExpenseSummary.css';

function formatCurrency(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce(
    (sum, exp) => sum + parseFloat(exp.price),
    0
  );
  const count = expenses.length;
  const monthsWithData = new Set(
    expenses.map((exp) => exp.date.getMonth())
  ).size;
  const avgPerMonth =
    monthsWithData > 0 ? total / monthsWithData : total / 12;

  const stats = [
    {
      label: 'Total Spent',
      value: formatCurrency(total),
      icon: FiDollarSign,
    },
    {
      label: 'Expenses',
      value: count.toString(),
      icon: FiList,
    },
    {
      label: 'Avg / Month',
      value: formatCurrency(avgPerMonth),
      icon: FiTrendingUp,
    },
  ];

  return (
    <div className="expense-summary">
      {stats.map((stat) => (
        <div key={stat.label} className="summary-card">
          <div className="summary-card__icon">
            <stat.icon />
          </div>
          <div className="summary-card__content">
            <span className="summary-card__value">{stat.value}</span>
            <span className="summary-card__label">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseSummary;
