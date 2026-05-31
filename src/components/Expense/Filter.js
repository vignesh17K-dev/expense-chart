import './Filter.css';

function Filter({ selectedYear, years, onfilter }) {
  function updatedfilter(event) {
    onfilter(event.target.value);
  }

  return (
    <div className="filter-bar">
      <h3 className="filter-bar__label">Filter by year</h3>
      <select
        className="filter-bar__select"
        value={selectedYear}
        onChange={updatedfilter}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
