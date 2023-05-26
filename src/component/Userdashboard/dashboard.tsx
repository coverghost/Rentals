import React, { useContext, useEffect, useState } from "react";
import "../css/dashboard.css";
import "../css/dashboardScreen.css";
import { Link } from "react-router-dom";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import DebitCard from "./debitcard";
import MoneyTransferForm from "./transaction";
import Usercard from "./usercard";
import Moneytransfer from "./moneytransfer";
import { MyContext } from "../../context/Context";
import userimage from "../image/user.png";
import Profile from "./profile";
// import userimage from"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"

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
  const [transactionscreen, settransactionscreen] = useState(false);
  const [cardscreen, setcardscreen] = useState(false);
  const [passbookscreen, setpassbookscreen] = useState(false);
  const [profilescreen, setprofilescreen] = useState(true);

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
    console.log("value -------- line 102=>",value)
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
  // console.log("userdetail line 132 ---->>",((userdetail?userdetail:0)?.useracount[0]?.totalamount)?(userdetail?.useracount[0]?.totalamount):0)

  return (
    <>
      <div className="dashboard-screnn">
        <div className="side-nav-dashboard">
          <div className="side-nav-profile">
            <div className="dashboard-image-card">
              <img src={userimage} alt="userprofile" />{" "}
            </div>
            <div>
              <p>
                <span className="User-name">{name}</span> <br />{" "}
                {userdetail?.user?.userId
                  ? userdetail?.user?.userId
                  : "User Id"}
              </p>
            </div>
          </div>
          <ul>
            <li>
              <button
                onClick={() => {
                  screenchange("Profile");
                }}
              >
                Profile
              </button>
            </li>
            <li>
              <button  onClick={() => {
                  screenchange("passbook");
                }}>Acounts</button>
            </li>
            <li>
              <button>Transactions</button>
            </li>
            <li>
              <button>Benificery</button>
            </li>
            <li>
              <button>Cards</button>
            </li>
          </ul>
        </div>
        <div className={`main-content ${profilescreen ? " " : "hidden"}`}>
          <div className="profile-screen">
            <Profile userdetail={userdetail} />
          </div>
        </div>
        <div className={`main-content ${passbookscreen ? " " : "hidden"}`}>
          <div className="profile-screen">
            <MoneyTransferForm bankname={""} Accnumber={""} Customer={""} IfscCode={""} UpiId={""} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
