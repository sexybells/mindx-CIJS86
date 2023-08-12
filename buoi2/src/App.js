import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicketProvider from "./components/TicketProvider";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/introduce" element={<Introduce />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
