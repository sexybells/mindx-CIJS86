import React, { createContext, useContext, useState } from "react";
import { TicketContext } from "./Context";
import Modal from "./Modal";
import Loading from "./Loading";

const TicketProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [ticketForm, setTicketForm] = useState({ ticket: "", email: "" });
  const [countTicket, setCountTicket] = useState(15);
  const [loading, setLoading] = useState(false);
  const handleModal = (status) => {
    setIsModal(status);
  };

  const contextValue = {
    isModal,
    handleModal,
    ticketForm,
    setTicketForm,
    countTicket,
    setCountTicket,
    loading,
    setLoading,
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
      <Loading />
      <Modal />
    </TicketContext.Provider>
  );
};

export default TicketProvider;
