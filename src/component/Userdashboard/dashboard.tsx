import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import Profile from "./profile";

const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [token, setToken] = useState("");
  const [userdetail, SetUserDetail] = useState<any>();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  console.log("userdetail---->>>>", userdetail);

  const name = userdetail?.user?.personal?.name || "USER";

  const handleSignup = async () => {
    const userdata = await dashboarService.getUserData(token);
    SetUserDetail(userdata);
  };

  return (
    <>
      <div className={`dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar">
          <div className="User-Name">{name}</div>
          <div className="card">
            <img
              src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
              alt="profile"
              className="icon"
            />
          </div>
          {
            <div className="container1">
              <div className="coupon">
                <div className="union">
                  <div className="polygon-right">
                    {" "}
                    <div className="profile">
                      <Profile />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            // <div className="profile">
            //   <Profile />
            // </div>
          }
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link
                to="/dashboard"
                className="sidebar-link"
                onClick={handleSignup}
              >
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
        <div className="main-content">
          {
            <div className="container">
              <div className="coupon">
                <div className="union">
                  <div className="polygon-right"> arya</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
