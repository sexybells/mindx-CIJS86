import React, { useState } from "react";
import DatePicker from "react-datepicker";
const CreateNote = (props) => {
  const [show, setShow] = useState(false);
  const { formData, setFormData, handleForm } = props;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (date) => {
    const convert = new Date(date)
    setFormData({ ...formData, date: convert });
  };

  const submitForm = (e) => {
    if (e === 'add') {
        handleForm()
    } else {
        setShow(false)
        handleForm()
    }
  };


  return (
    <div className="form-create">
      {!show ? (
        <div className="firstStep">
          <button className="buttonShow" onClick={() => setShow(true)}>ADD NEW EXPENSE</button>
        </div>
      ) : (
        <>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="name"
                class="form-control"
                id="staticEmail"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Amount
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                value={formData.amount}
                class="form-control"
                name="amount"
                id="inputPassword"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Date
            </label>
            <div class="col-sm-10">
              <DatePicker
                className="form-control date"
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="formButton">
            <button className="add" onClick={() => submitForm('add')}>ADD</button>
            <button className="cancel" onClick={() => submitForm('close')}>CANCEL</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateNote;
