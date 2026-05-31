import { useNavigate } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm/ExpenseForm';
import { useExpenses } from '../context/ExpenseContext';

function AddExpensePage() {
  const { addExpense } = useExpenses();
  const navigate = useNavigate();

  function handleAdd(data) {
    addExpense(data);
    navigate('/expenses');
  }

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Add Expense</h1>
        <p className="page-header__subtitle">
          Record a new expense to track your spending
        </p>
      </header>

      <ExpenseForm ontransfer={handleAdd} alwaysOpen />
    </>
  );
}

export default AddExpensePage;
