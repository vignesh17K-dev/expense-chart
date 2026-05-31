import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ExpenseProvider } from './context/ExpenseContext';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage';
import ExpensesPage from './pages/ExpensesPage';
import AddExpensePage from './pages/AddExpensePage';

function App() {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="expenses" element={<ExpensesPage />} />
              <Route path="add" element={<AddExpensePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </ThemeProvider>
  );
}

export default App;
