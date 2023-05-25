import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./pop";
import "./css/nav.css";

const Navbar = () => {
  const { isLoggedIn } = useContext(MyContext);
  const { closepopup } = useContext(MyContext);
  const { unitoken } = useContext(MyContext);

  const { setClosepopup } = useContext(MyContext);
  const { setUnitoken } = useContext(MyContext);

  

  const { setLoggedIn } = useContext(MyContext);
  const [showPopup, setShowPopup] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();


  console.log("token------>>>", unitoken);

  const openPopup = () => {
    setClosepopup(false);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setUnitoken("")
    setLoggedIn(false);
    navigate("/") 
  };

  console.log("from Navbar===closepopup =>", closepopup);

  return (
    <>
      <div className="nav_bar">
        <div className="logo">{/* <img src={logo} alt="logo" /> */}Arya Bank</div>
        {unitoken ? (
          <ul className="nav_bar">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
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
        ) : (
          <ul className="nav_bar">
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
        )}

        {isLoggedIn ? (
          <button className="login_button" onClick={handleLogout}>
            LogOut
          </button>
        ) : (
          <button className="login_button" onClick={openPopup}>
            LogIn
          </button>
        )}
      </div>
      {closepopup
        ? ""
        : showPopup && (
            <div className="popup-container">
              <div className="blur-background"></div>
              <Popup onClose={closePopup} />
            </div>
          )}
    </>
  );
};

export default Navbar;
