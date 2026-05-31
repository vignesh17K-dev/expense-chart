import { useState, useMemo, useEffect } from 'react';

export function useYearFilter(items) {
  const years = useMemo(() => {
    const yearSet = new Set(
      items.map((ele) => ele.date.getFullYear().toString())
    );
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [items]);

  const defaultYear = years[0] || new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState(defaultYear);

  useEffect(() => {
    if (years.length > 0 && !years.includes(selectedYear)) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  const activeYear = years.includes(selectedYear) ? selectedYear : defaultYear;

  const filteredExpenses = items.filter(
    (ele) => ele.date.getFullYear().toString() === activeYear
  );

  return {
    years,
    activeYear,
    setSelectedYear,
    filteredExpenses,
  };
}
