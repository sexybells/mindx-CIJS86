import React, { memo, useContext, useState } from 'react';
import '../style/modal.css';
import { TicketContext } from './Context';
const Loading = () => {

  const {loading} = useContext(TicketContext)

  if (!loading) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
      <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
      </div>
    </div>
  );
};

export default memo(Loading);