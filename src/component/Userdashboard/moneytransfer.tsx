import React, { useContext, useEffect, useState } from "react";
import "../css/moneytransfer.css";
import image from "../image/previous.png";
import { MyContext } from "../../context/Context";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import add_benificery from "../image/add benificery.png";
import BenifercyPopup from "./benificeryPop";

type DebitCardProps = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

const Moneytran = () => {
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      list_beneficiary(storedToken);
    }
    Add_Beneficiary();
  }, []);

  const { uniupi } = useContext(MyContext);
  const { setUniupi } = useContext(MyContext);

  const [token, setToken] = useState("");
  const [value, setvalues] = useState<DebitCardProps>();
  const [bankscreen, setbankscreen] = useState(false);
  const [Upiscreen, setUpiscreen] = useState(false);
  const [optionscreen, setoptionscreen] = useState(true);
  const [upiid, setUpi] = useState("");
  const [amount, setamount] = useState("");
  const [transferapi, settransferapi] = useState<any>("");
  const [allUser, setalluser] = useState<any>("");
  const [allBenificery, setallBenificery] = useState<any>("");

  const { setClosepopup_benificer } = useContext(MyContext);
  const { closepopup_benificer } = useContext(MyContext);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setClosepopup_benificer(false);
    setShowPopup(true);
  };
  const closePopup = () => {
    list_beneficiary(token);
    setShowPopup(false);
  };

  const screenchange = (value: any) => {
    switch (value) {
      case "upiid":
        setoptionscreen(false);
        setbankscreen(false);
        setUpiscreen(true);
        break;
      case "bank":
        setbankscreen(true);
        setoptionscreen(false);
        setUpiscreen(false);
        break;
      case "back":
        setoptionscreen(true);
        setbankscreen(false);
        setUpiscreen(false);
        setUniupi("");
        setUpi("");
        setamount("");
        break;
      default:
        break;
    }
  };

  const list_beneficiary = async (token: any) => {
    try {
      const senddata = await dashboarService.listbeificery(token);
      setallBenificery(senddata);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  // for upi transaction
  const handleUpiChange = (event: any) => {
    setUpi(event.target.value);
  };
  const handleamountChange = (event: any) => {
    setamount(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const sendmoney = async () => {
    const upi = uniupi ? uniupi : upiid;
    const datatosend = { upi, amount };
    try {
      const senddata = await dashboarService.transactionByUpi(
        token,
        datatosend
      );
      settransferapi(senddata);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  const Add_Beneficiary = async () => {
    try {
      const senddata = await dashboarService.getAllUser();
      setalluser(senddata);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  const userListData = allUser?.Userlist ? allUser?.Userlist : [];

  const Benificerylist = allBenificery.Benificerylist
    ? allBenificery.Benificerylist
    : [];
  return (
    <>
      <div className="Moneytran-heading">
        <h5>
          <span className="Moneytran-heading-name">Transfer Money</span>{" "}
        </h5>
      </div>
      <div className="Moneytran-body">
        {/* up  */}
        <div className="Moneytran-detail-right">
          <div className="Moneytran-Personal-content-right-benificery-card">
            <h2>Beneficiary</h2>
            <h3>
              <img src={add_benificery} alt="" onClick={openPopup} />
            </h3>
            <div className="benificery-table">
              {Benificerylist.map((iteam: any, index: any) => (
                <div key={index}>
                  <table>
                    <td>{"--"}</td>
                    <td>
                      <p>{iteam.personal.name}</p>
                    </td>
                    <td>{"--"}</td>
                    <td>
                      <p>{iteam.bankDetails.upiId}</p>
                    </td>
                    <td>{"--"}</td>
                    <td>
                      <button>Pay</button>
                    </td>
                    <td>{"--"}</td>
                    <td>
                      <button>delete</button>
                    </td>
                  </table>
                </div>
              ))}
            </div>
          </div>
          <div className="Moneytran-Personal-content-right">
            <h2>Total Debt</h2>
            <h3>heading h3</h3>
          </div>
        </div>
        {closepopup_benificer
          ? ""
          : showPopup && (
              <div className="moneytransfer-popup-container">
                {" "}
                <BenifercyPopup
                  userlist={userListData}
                  token={token}
                  onClose={closePopup}
                />
              </div>
            )}
        <div className="Moneytran-Personal">
          <div className="Moneytran-heading-transfer-upi">
            <img src={image} alt="" onClick={() => screenchange("back")} />
            <h1 className="heading-money">Transfer</h1>
          </div>
          <div
            className={`main-content-transfer ${optionscreen ? "" : "hidden"}`}
          >
            <div className="transaction-option">
              <div className="voneytransfer-card">
                <button onClick={() => screenchange("upiid")}>
                  Through Upi ID
                </button>
              </div>
              <div className="voneytransfer-card">
                <button onClick={() => screenchange("bank")}>
                  Through Bank
                </button>
              </div>
            </div>
          </div>

          <div
            className={`main-content-transfer ${bankscreen ? "" : "hidden"}`}
          >
            <h1 className="">BANK Transfer</h1>
          </div>
          <div className={`main-content-transfer ${Upiscreen ? "" : "hidden"}`}>
            <form onSubmit={handleSubmit} className="formm">
              <div>
                <input
                  type="text"
                  id="UPI"
                  value={uniupi ? uniupi : upiid}
                  onChange={handleUpiChange}
                  required
                  placeholder="Upi ID"
                />
                <input
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={handleamountChange}
                  required
                  placeholder="Amount"
                />
              </div>
              <button
                onClick={sendmoney}
                type="submit"
                className="submit-button"
              >
                {"Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moneytran;
