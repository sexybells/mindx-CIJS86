import React, { useState, useEffect } from "react";
import { Progress } from "rsuite";
const FilterYears = (props) => {
    const {data} = props
    const [average, setAverage] = useState([])
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const yearly = data.reduce((result, item) => {
        const { month, amount } = item;
        return parseInt((result[month] || 0) + amount);
      }, {});
      const params = [];
      data.forEach(item => {
        const {month, amount} = item;
        params[month] = (amount / yearly) * 100
      })
      setAverage(params);
  }, [data])
  return (
    <div className="bar-wrap">
      <div className="bars">
        {months.map((v, i) => (
          <div>
            <Progress.Line
              vertical
              strokeWidth={15}
              showInfo={false}
              percent={average[i + 1] ? average[i + 1] : 0}
            />
            <p style={{ color: 'white' }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterYears;
