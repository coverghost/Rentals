import React, { useContext, useState } from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";
import { MyContext } from "../context/Context";
import LoginForm from "./login";

const Popup = ({ onClose }: any) => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="popup">
        <button onClick={onClose}>Close</button>
      <div className="popup-content">
        <h3>Login</h3>
        <LoginForm/>
      </div>
    </div>
  );
};
export default Popup