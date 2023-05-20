import React, { useContext, useState } from "react";
import "./css/nav.css";
import LoginForm from "./login";

const Popup = ({ onClose }: any) => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="popup">
        <button onClick={onClose} className="cross">❌</button>
      <div className="popup-content">
        <LoginForm/>
      </div>
    </div>
  );
};
export default Popup