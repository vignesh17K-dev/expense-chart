import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const allvalues = props.data.map((ele) => ele.value);
  const maxvalue = Math.max(...allvalues);

  return (
    <div className="chart-container">
      <h3 className="chart-container__title">Monthly Overview</h3>
      <div className="chart-container__bars">
        {props.data.map((ele) => (
          <ChartBar
            key={ele.label}
            max={maxvalue}
            name={ele.label}
            price={ele.value}
          />
        ))}
      </div>
    </div>
  );
}

export default Chart;
