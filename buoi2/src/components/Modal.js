import React, { memo } from 'react';
import '../style/modal.css';
const Modal = (props) => {
  const { show, hideAndShowModal, children } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => hideAndShowModal(false)}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default memo(Modal);