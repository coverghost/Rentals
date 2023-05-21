import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import DebitCard from "./debitcard";
import MoneyTransferForm from "./transaction";

interface DataItem {
  title: string;
  description: string;
}
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
  const Address = [
    userdetail?.user?.address.line1
      ? userdetail?.user?.address.line1
      : "locallity",
    userdetail?.user?.address.city ? userdetail?.user?.address.city : "City",
    userdetail?.user?.address.state ? userdetail?.user?.address.state : "state",
    userdetail?.user?.address.pincode
      ? userdetail?.user?.address.pincode
      : "Pincode",
  ].join(", ");
  const image =
    userdetail?.user?.personal?.photo ||
    "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png";

  const handleSignup = async () => {
    const userdata = await dashboarService.getUserData(token);
    SetUserDetail(userdata);
  };

  const data: DataItem[] = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 20" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 20" },
  
  
  ];

  return (
    <>
      <div className={`dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar">
          <div className="User-Name">{name}</div>
          <div className="card1">
            <img src={image} alt="profile" className="icon" />
          </div>
          {
            <div className="container1">
              <div className="coupon">
                <div className="union">
                  <div className="polygon-right">
                    {" "}
                    <div className="profile">
                      <div className="user-detail-on-card">
                        <table className="detail">
                          <tbody>
                            <tr>
                              <td>
                                UserId<span> :</span>{" "}
                              </td>
                              <td>{userdetail?.user?.userId}</td>
                            </tr>
                            <tr>
                              <td>
                                mobile<span> :</span>{" "}
                              </td>
                              <td>{userdetail?.user?.personal?.mobile}</td>
                            </tr>
                            <tr>
                              <td>
                                DOB <span> :</span>
                              </td>
                              <td>
                                {(userdetail?.user?.personal?.dob
                                  ? userdetail?.user?.personal?.dob
                                  : "0"
                                ).length > 2
                                  ? userdetail?.user?.personal?.dob
                                  : "DD-MM-YYYY"}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                ADDRESS <span> :</span>
                              </td>
                              <td> {Address}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            <div className="container1-transfer-card">
              <div className="coupon-transfer-card">
                <div className="polygon-right-transfer-card">
                  <MoneyTransferForm
                    Accnumber={"77039906001234"}
                    Customer={"AYUSH ARYA"}
                    IfscCode={"ARBA00012"}
                    UpiId={"7703990600@ybl"}
                  />
                  <div className="card-container-scroller">
                    {data.map((item, index) => (
                      <div className="card-scroller" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            <div className="container-total-orders">
              <div className="coupon-total-orders">
                <div className="polygon-right-total-orders">
                  TOTAL AMOUNT <div className="value-total-orders">5,000</div>{" "}
                </div>
              </div>
            </div>
          }
          {
            <div className="container-total-orders">
              <div className="coupon-total-orders">
                <div className="polygon-right-total-orders">
                  TOTAL ORDER <div className="value-total-orders">500</div>{" "}
                </div>
              </div>
            </div>
          }

          {
            <div className="container-total-orders">
              <div className="coupon-total-orders">
                <div className="polygon-right-total-orders">
                  TOTAL ORDER <div className="value-total-orders">500</div>{" "}
                </div>
              </div>
            </div>
          }
          <div className="debitcard-conatiner">
            <DebitCard
              cardNumber={"7890 0762 3548 6523"}
              cardHolder={"AYUSH ARYA"}
              expirationDate={"12/25"}
              cvv={"132"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
