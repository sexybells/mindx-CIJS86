import "./App.css";
import React, { useState, useEffect } from "react";
import CreateNote from "./components/CreateNote";
import ExpenseList from "./components/ExpenseList";
import FilterYears from "./components/Filter";
import moment from 'moment';

function App() {
  const [formData, setFormData] = useState({ name: "", amount: '', date: "" });
  const [expense, setExpense] = useState([]);
  const [data, setData] = useState([])
  const [yearOptions, setYearOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  const handleForm = () => {
    const dateTime = moment(formData.date)
    const params = {
      name: formData.name, 
      amount: formData.amount,
      year: dateTime.year(),
      month: dateTime.months() + 1,
      day: dateTime.date()
    }
    const add = expense.concat(params);
    if (dateTime.year() === selectedOption) {
      const pushData = data.concat(params)
      setData(pushData);
    }
    setExpense(add)
  }
  const handleOptionChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedOption(value);
    const filter = expense.filter((v) => v.year === value);
    setData(filter);
    
  };
  useEffect(() => {
    let years = expense.map(item => item.year);
    years = years.sort((a, b) => b-a)
    years = years.filter((item, index) => years.indexOf(item) === index)
    const filterData = expense.filter((v) => v.year === yearOptions[0])
    setData(filterData);
    setSelectedOption(years[0])
    setYearOptions(years);
  }, [expense, data])

  return (
    <div className="App">
      <div className="container">
        <CreateNote formData={formData} handleForm={handleForm} setFormData={setFormData} />
        <div className="content">
          <div className="filters">
            <div className="filter-text">
              <p>Filter by year</p>
            </div>
            <div className="filter-options">
              <select class="form-select" value={selectedOption} onChange={handleOptionChange}> aria-label="Default select example">
                  {yearOptions.map((v, i) => (
                    <option value={v} selected={v === selectedOption}>{v}</option>
                  ))}
              </select>
            </div>
          </div>
          <FilterYears data={data} />
          {data.map((v, i) => (
            <ExpenseList item={v} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
