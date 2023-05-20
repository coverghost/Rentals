import { useContext, useState } from "react";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import Popup from "./pop";
import "./css/nav.css";

const Navbar = () => {
  const { isLoggedIn } = useContext(MyContext);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  console.log("from Navbar====>", isLoggedIn);

  return (
    <>
      <div className="nav_bar">
        <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>
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

        {isLoggedIn ? (
          <button className="login_button" onClick={openPopup}>
            LogOut
          </button>
        ) : (
          <button className="login_button" onClick={openPopup}>
            LogIn
          </button>
        )}
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="blur-background"></div>
          <Popup onClose={closePopup} />
        </div>
      )}
    </>
  );
};

export default Navbar;
