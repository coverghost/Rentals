import React, { useState } from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";
import Login from "./login";
const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="nav_bar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav_bar li a">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
        <button className="login_button" onClick={togglePopup}>
          LogIn
        </button>
      </div>
      {showPopup && (
      <div className="login-container">
        
          <div className="popup-container">
            <div className="popup">
              <button onClick={togglePopup} className="button">
                ❌
              </button>
              <Login />
            </div>
          </div>
      </div>
        )}
    </>
  );
};
export default Navbar;
