import React from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav_bar li a">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
        <button className="login_button">LOGIN</button>
      </div>
    </>
  );
};
export default Navbar;
