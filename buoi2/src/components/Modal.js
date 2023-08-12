import React, { memo, useContext, useState } from 'react';
import '../style/modal.css';
import { TicketContext } from './Context';
const Modal = () => {

  const {isModal, handleModal, ticketForm, setTicketForm, setCountTicket, setLoading, countTicket} = useContext(TicketContext)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicketForm({ ...ticketForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticketForm.ticket <= countTicket) {
      setCountTicket((prev) => prev - parseInt(ticketForm.ticket, 10))
      console.log('Bạn vừa mua ' + ticketForm.ticket + ' vé. Đã được gửi tới '+ ticketForm.email)
      setTicketForm({ticket: '', email: ''})
      handleModal(false);
      setLoading(true);
    } else {
      handleModal(false);
      alert('Không đủ vé')
    }

    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000)
  }

  if (!isModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => handleModal(false)}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Ticket</label>
    <input type="number" class="form-control" onChange={handleChange} value={ticketForm.ticket} id="exampleInputEmail1" name='ticket' aria-describedby="emailHelp" placeholder="Enter Ticket" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" onChange={handleChange} value={ticketForm.email} name='email' class="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        <button className='btn btn-danger' onClick={() => handleModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default memo(Modal);