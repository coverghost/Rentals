import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";

const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const name = "AYUSH ARYA"

  return (
    <>
      <div className={`dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar">
          <div className="User-Name">{name?name:"USER"}</div>
          <div className="card">
            <img
              src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
              alt="profile"
              className="icon"
            />
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link to="/user-profile" className="sidebar-link">
                Profile
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/dashboard" className="sidebar-link">
                Dashboard
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/dashboard" className="sidebar-link">
                ABOUT
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/dashboard" className="sidebar-link">
                SERVICES
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/dashboard" className="sidebar-link">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        {/* {dashboard part } */}
        <div className="main-content">{}</div>
      </div>
    </>
  );
};

export default Userdashboard;
