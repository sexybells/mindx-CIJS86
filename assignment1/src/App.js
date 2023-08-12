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

  //Ở đây là hàm sau khi ấn nút ADD. Mình sử dụng 2 state để chứa data, trong đó expense là data tổng. Sau khi thêm mới thì sẽ lưu vào state này đầu tiên. Còn lại là state data, chứ dữ liệu theo năm được lựa chọn ở phần filter
  const handleForm = () => {
    //Đầu tiên mình sẽ sử dụng momentjs để có thể lấy được ngày/tháng/năm
    const dateTime = moment(formData.date)
    const params = {
      name: formData.name, 
      amount: formData.amount,
      year: dateTime.year(),
      month: dateTime.months() + 1,
      day: dateTime.date()
    }
    //Sau đó mình sẽ thêm value vào cho expense
    const add = expense.concat(params);
    //Nếu như trong dữ liệu mới, năm = năm được chọn, cũng sẽ lưu vào state data
    if (dateTime.year() === selectedOption) {
      const pushData = data.concat(params)
      setData(pushData);
    }
    setExpense(add)
  }

  //Hàm sử lý select option
  const handleOptionChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedOption(value);
    const filter = expense.filter((v) => v.year === value);
    setData(filter);
    
  };
  //Ở đây mình sử dụng useEffect, sẽ chạy vào mỗi khi có thay đổi ở 2 state expense và data.
  //Mình sẽ lọc ra toàn bộ năm có trong expense sau đó thêm nó vào 1 cái state khác là selectedOption để có thể hiển thị ở select option
  //YearOptions là state lưu năm được lựa chọn ở select option, mặc định sẽ là năm lớn nhất.
  //Data khi bắt đầu vào web, data sẽ chứa dữ liệu theo năm lớn nhất, dựa theo giá trị mặc định của yearOptions
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
              <select class="form-select" value={selectedOption} onChange={handleOptionChange} aria-label="Default select example">
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
