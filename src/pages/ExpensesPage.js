import ExpenseCard from '../components/Expense/ExpenseCard';
import Filter from '../components/Expense/Filter';
import { useExpenses } from '../context/ExpenseContext';
import { useYearFilter } from '../hooks/useYearFilter';
import { FiInbox } from 'react-icons/fi';

function ExpensesPage() {
  const { items } = useExpenses();
  const { years, activeYear, setSelectedYear, filteredExpenses } =
    useYearFilter(items);

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Expenses</h1>
        <p className="page-header__subtitle">
          All expenses for {activeYear}
        </p>
      </header>

      <div className="expense-panel">
        <Filter
          selectedYear={activeYear}
          years={years}
          onfilter={setSelectedYear}
        />

        {filteredExpenses.length === 0 ? (
          <div className="empty-state">
            <FiInbox className="empty-state__icon" />
            <p className="empty-state__text">
              No expenses found for {activeYear}
            </p>
          </div>
        ) : (
          filteredExpenses.map((ele) => (
            <ExpenseCard
              key={ele.id}
              title={ele.title}
              price={ele.price}
              date={ele.date}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ExpensesPage;
