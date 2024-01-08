import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { FiAirplay } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<SignIn />} />

        {/* private routes */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
