import { createContext, useContext, useState } from 'react';

const initialItems = [
  {
    id: 1,
    title: 'New tv',
    price: 213.26,
    date: new Date(2020, 12, 17),
  },
  {
    id: 2,
    title: 'Wifi',
    price: 745.02,
    date: new Date(2021, 8, 3),
  },
  {
    id: 3,
    title: 'Iphone',
    price: 1099,
    date: new Date(2022, 2, 27),
  },
  {
    id: 4,
    title: 'Bills',
    price: 1583.1,
    date: new Date(2020, 4, 13),
  },
  {
    id: 5,
    title: 'Electricity',
    price: 199.6,
    date: new Date(2022, 1, 17),
  },
];

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [items, setItems] = useState(initialItems);

  function addExpense(data) {
    const newItem = {
      id: Math.random().toString(),
      ...data,
    };
    setItems((prev) => [newItem, ...prev]);
  }

  return (
    <ExpenseContext.Provider value={{ items, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}
