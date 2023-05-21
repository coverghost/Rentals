import React, { useContext, useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";
import { MyContext } from "../../context/Context";

const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [token, setToken] = useState("");



  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {

      setToken(storedToken);
    }
  }, []);

  const name = "AYUSH ARYA"
  console.log("unitoken-------- from dashboard line 13-->>",token)
  
  const handleSignup = async () => {
    try {
      const response = await axios.post(api + "/dashboard", {
        token
      });
      const data = response.data;
     console.log("data---from dashboard -- line 17-->",data)
    } catch (error: any) {
      // setError(error.response.data.message);
    }
  }


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
              <Link to="/dashboard" className="sidebar-link" onClick={handleSignup}>
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
