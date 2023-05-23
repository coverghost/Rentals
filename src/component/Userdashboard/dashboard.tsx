import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import "../css/dashboardScreen.css";
import { Link } from "react-router-dom";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import DebitCard from "./debitcard";
import MoneyTransferForm from "./transaction";
import Usercard from "./usercard";
import Moneytransfer from "./moneytransfer";

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
  const [cardscreen, setcardscreen] = useState(false);
  const [passbookscreen, setpassbookscreen] = useState(false);
  const [profilescreen, setprofilescreen] = useState(false);

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
        setprofilescreen(false);
        break;
      case "card":
        settransactionscreen(false);
        setcardscreen(true);
        setpassbookscreen(false);
        setprofilescreen(false);

        break;
      case "passbook":
        settransactionscreen(false);
        setcardscreen(false);
        setpassbookscreen(true);
        setprofilescreen(false);

        break;
      case "Profile":
        settransactionscreen(false);
        setcardscreen(false);
        setpassbookscreen(false);
        setprofilescreen(true);

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
                onClick={() => screenchange("Profile")}
              >
                Profile
              </button>
            </li>
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
          </ul>
        </div>

        {/* {dashboard part } */}

        <div className={`main-content ${transactionscreen ? " " : "hidden"}`}>
          <h1 className="transaction-heading">Make Transaction</h1>
          <div className="debitcard-conatiner">
            <DebitCard
              cardNumber={"7890 0762 3548 6523"}
              cardHolder={"AYUSH ARYA"}
              expirationDate={"12/25"}
              cvv={"132"}
            />
          </div>
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
          {
            <div className="coupon-transfer-card-left">
              <Moneytransfer/>
            </div>
          }
        </div>
        <div className={`main-content ${cardscreen ? " " : "hidden"}`}>
          <h1 className="transaction-heading">Apply For Card</h1>
        </div>
        <div className={`main-content ${passbookscreen ? " " : "hidden"}`}>
          <h1 className="transaction-heading">Passbook</h1>
        </div>
        <div className={`main-content ${profilescreen ? " " : "hidden"}`}>
          <h1 className="transaction-heading">Profile</h1>
          <div className="profile-card">
            <div className="Bank-detail">
              <h1>Bank Details</h1>
            </div>
            <div className="Bank-detail-card">
              <table>
                <td>
                  <tr>
                    <p>Bank Name</p>{" "}
                  </tr>
                  <tr>
                    <p>Acc. Number</p>
                  </tr>
                  <tr>
                    {" "}
                    <p>IFSC Code</p>{" "}
                  </tr>
                  <tr>
                    <p>Upi Id</p>
                  </tr>
                </td>
                <td>
                  <tr>
                    <p>:</p>{" "}
                  </tr>
                  <tr>
                    <p>:</p>
                  </tr>
                  <tr>
                    {" "}
                    <p>:</p>{" "}
                  </tr>
                  <tr>
                    <p>:</p>
                  </tr>
                </td>
                <td>
                  <tr>
                    <p>{userdetail?.user?.bankDetails?.bankName}</p>{" "}
                  </tr>
                  <tr>
                    <p>{userdetail?.user?.bankDetails?.accountNumber}</p>
                  </tr>
                  <tr>
                    {" "}
                    <p>{userdetail?.user?.bankDetails?.ifsc}</p>{" "}
                  </tr>
                  <tr>
                    <p>{userdetail?.user?.bankDetails?.upiId}</p>
                  </tr>
                </td>
              </table>
            </div>
            <div className="Bank-detail">
              <h1>KYC Details</h1>
            </div>
            <div className="Bank-detail-card">
              <table>
                <td>
                  <tr>
                    <p>Adhar Card</p>{" "}
                  </tr>
                  <tr>
                    <p>PAN Card</p>
                  </tr>
                </td>
                <td>
                  <tr>
                    <p>:</p>{" "}
                  </tr>
                  <tr>
                    <p>:</p>
                  </tr>
                </td>
                <td>
                  <tr>
                    <p>{userdetail?.user?.bankDetails?.bankName}</p>{" "}
                  </tr>
                  <tr>
                    <p>{userdetail?.user?.bankDetails?.accountNumber}</p>
                  </tr>
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
