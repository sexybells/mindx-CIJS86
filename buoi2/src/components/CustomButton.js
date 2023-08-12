import React from "react";

const CustomButton = (props) => {
  const { hideAndShowModal, modalOpen } = props;

  return (
    <div className="button">
      <button
        className="btn btn-primary bg-dark"
        onClick={() => hideAndShowModal(true)}
      >
        Buy Tickets
      </button>
      <button className="btn btn-danger" onClick={() => hideAndShowModal(true)}>
        Get free
      </button>
    </div>
  );
};

export default CustomButton;
