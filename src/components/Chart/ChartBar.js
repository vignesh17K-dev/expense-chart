import './ChartBar.css';

function formatBarValue(value) {
  if (value >= 1000) {
    return '$' + (value / 1000).toFixed(1) + 'k';
  }
  return '$' + Math.round(value);
}

function ChartBar(props) {
  let fill;
  if (props.max === 0) {
    fill = '0%';
  } else {
    fill = Math.floor((props.price / props.max) * 100) + '%';
  }

  return (
    <div className="barbox">
      {props.price > 0 && (
        <span className="barbox__value">{formatBarValue(props.price)}</span>
      )}
      <div className="innerbar">
        <div className="fill" style={{ height: fill }} />
      </div>
      <span className="barname">{props.name}</span>
    </div>
  );
}

export default ChartBar;
