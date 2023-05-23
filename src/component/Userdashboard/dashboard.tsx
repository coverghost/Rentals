import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import DebitCard from "./debitcard";
import MoneyTransferForm from "./transaction";
import Usercard from "./usercard";

interface IUser {
  _id?: string;
  userId: string;
  personal?: {
    name?: string;
    password?: string;
    mobile?: string;
    photo?: string;
    dob: string;
  };
  address?: {
    line1: string;
    line2?: string;
    pincode: number;
    state: string;
    city: string;
  };
  kyc?: {
    panNumber: string;
    aadhaarNumber?: string;
  };
  bankDetails?: {
    bankName: string;
    accountName: string;
    ifsc: string;
    accountNumber: string;
    upiId?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [token, setToken] = useState("");
  const [userdetail, SetUserDetail] = useState<any>();
  const [getAllUser, setgetAllUser] = useState<any>();
  const [transactionscreen, settransactionscreen] = useState(true);
  const [cardscreen, setcardscreen] = useState(true);
  const [passbookscreen, setpassbookscreen] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }

    const loaddata = async () => {
      try {
        const userdata = await dashboarService.getUserData(storedToken);
        SetUserDetail(userdata);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    const fetchData = async () => {
      try {
        const userlistdata = await dashboarService.getAllUser();
        setgetAllUser(userlistdata);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    loaddata();
    fetchData();
  }, []);

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
  const data: IUser[] = getAllUser?.Userlist;

  const screenchange = (value: any) => {
    switch (value) {
      case "transaction":
        settransactionscreen(true);
        setcardscreen(false);
        setpassbookscreen(false);
        break;
      case "card":
        settransactionscreen(false);
        setcardscreen(true);
        setpassbookscreen(false);

        break;
      case "passbook":
        settransactionscreen(false);
        setcardscreen(false);
        setpassbookscreen(true);

        break;

      default:
        break;
    }
  };

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

          <ul className="sidebar-nav">
            {/* <button className="" onClick={() => screenchange("transaction")}>
              Transaction
            </button> */}
            <li className="sidebar-item">
              <button
                className="side-nav-button"
                onClick={() => screenchange("passbook")}
              >
                Passbook
              </button>
            </li>
            <li className="sidebar-item">
              <button
                className="side-nav-button"
                onClick={() => screenchange("card")}
              >
                Apply for Card
              </button>
            </li>

            <li className="sidebar-item">
              <button
                className="side-nav-button"
                onClick={() => screenchange("transaction")}
              >
                Make Transaction
              </button>
            </li>
            <li className="sidebar-item">
              <button
                className="side-nav-button"
                onClick={() => screenchange("passbook")}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>

        {/* {dashboard part } */}

        <div className={`main-content ${transactionscreen ? " " : "hidden"}`}>
          <h1 className="transaction-heading">Make Transaction</h1>
          {
            <div className="coupon-transfer-card">
              <div className="polygon-right-transfer-card">
                <MoneyTransferForm
                  bankname={userdetail?.user?.bankDetails?.bankName}
                  Accnumber={userdetail?.user?.bankDetails?.accountNumber}
                  Customer={userdetail?.user?.bankDetails?.accountName}
                  IfscCode={userdetail?.user?.bankDetails?.ifsc}
                  UpiId={userdetail?.user?.bankDetails?.upiId}
                />
              </div>
              <div className="card-container-scroller">
                {data?.map((item, index) => (
                  <Usercard
                    bankName={
                      item?.bankDetails?.bankName
                        ? item?.bankDetails?.bankName
                        : ""
                    }
                    cardNumber={
                      item?.bankDetails?.accountNumber
                        ? item?.bankDetails?.accountNumber
                        : ""
                    }
                    cardHolder={
                      item?.bankDetails?.accountName
                        ? item?.bankDetails?.accountName
                        : ""
                    }
                    expirationDate={
                      item?.bankDetails?.upiId ? item?.bankDetails?.upiId : ""
                    }
                    cvv={item?.bankDetails?.ifsc ? item?.bankDetails?.ifsc : ""}
                  />
                ))}
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
        <div></div>
      </div>
    </>
  );
};

export default Userdashboard;
