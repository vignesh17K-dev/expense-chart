import Filter from '../components/Expense/Filter';
import ExpenseSummary from '../components/Expense/ExpenseSummary';
import Expensechart from '../components/Expense/ExpenseChart';
import { useExpenses } from '../context/ExpenseContext';
import { useYearFilter } from '../hooks/useYearFilter';

function DashboardPage() {
  const { items } = useExpenses();
  const { years, activeYear, setSelectedYear, filteredExpenses } =
    useYearFilter(items);

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Dashboard</h1>
        <p className="page-header__subtitle">
          Overview of your spending for {activeYear}
        </p>
      </header>

      <div className="expense-panel">
        <Filter
          selectedYear={activeYear}
          years={years}
          onfilter={setSelectedYear}
        />
        <ExpenseSummary expenses={filteredExpenses} />
        <Expensechart Expense={filteredExpenses} />
      </div>
    </>
  );
}

export default DashboardPage;
