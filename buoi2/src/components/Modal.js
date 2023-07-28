import React, { memo, useState } from 'react';
import '../style/modal.css';
const Modal = (props) => {
  const { show, children, setModalOpen } = props;
  const [formData, setFormData] = useState({ticket: 0, email: ''})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bạn vừa mua ' + formData.ticket + ' vé. Đã được gửi tới '+ formData.email)
    setFormData({ticket: 0, email: ''})
    setModalOpen(false)
  }

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setModalOpen(false)}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>Ticket $3/1:
            <input type="number" name='ticket' value={formData.ticket} onChange={handleChange} />
          </label>
          <label>Send to:
            <input type="text" name='email' placeholder='Enter your email' onChange={handleChange} value={formData.email} />
          </label>
          <button type='submit'>Submit</button>
        </form>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default memo(Modal);