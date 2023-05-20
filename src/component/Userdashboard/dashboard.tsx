import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";

const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className={`dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar">
          <div className="logo">ayush</div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link to="/dashboard" className="sidebar-link">
                {
                  <img
                    className="icons-sidenav"
                    src="https://cdn-icons-png.flaticon.com/512/3899/3899618.png "
                    alt=""
                  />
                }
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
        <div className="main-content">{/* Main content */}</div>
      </div>
    </>
  );
};

export default Userdashboard;
