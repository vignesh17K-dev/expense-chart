import Chart from '../Chart/Chart';

function Expensechart(props) {
  const chartdata = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const exp of props.Expense) {
    const month = exp.date.getMonth();
    chartdata[month].value += parseFloat(exp.price);
  }

  return <Chart data={chartdata} />;
}

export default Expensechart;
