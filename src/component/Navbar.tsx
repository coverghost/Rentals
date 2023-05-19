import React, { useContext, useState } from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";
import Login from "./login";
import { MyContext } from "../context/Context";
const Navbar = () => {
  const { isLoggedIn } = useContext(MyContext);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  console.log("from Navbar====>", isLoggedIn)

  return (
    <>
      <div className="nav_bar">
        <div className="logo">
          {/* <img src={logo} alt="logo" /> */}
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
          <div className="popup-container">
            <div className="popup">
              <button onClick={togglePopup} className="button">
                ❌
              </button>
              <Login />
            </div>
          </div>
        )}
    </>
  );
};
export default Navbar;
