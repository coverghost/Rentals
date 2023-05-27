import React, { useContext, useEffect, useState } from "react";
import "../css/moneytransfer.css";
import image from "../image/previous.png";
import { MyContext } from "../../context/Context";
import { dashboarService } from "../dashboardservice.tsx/dashboard";
import add_benificery from "../image/add benificery.png"

type DebitCardProps = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

const Moneytran = () => {
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

  const screenchange = (value: any) => {
    console.log("value---->>", value);
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
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
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
  console.log("api send data line 75------>>>", transferapi.success);
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
            <h2>Beneficiary </h2>
            <h3>
              <img src={add_benificery} alt="" />
            </h3>
          </div>
          <div className="Moneytran-Personal-content-right">
            <h2>Total Debt</h2>
            <h3>heading h3</h3>
          </div>
        </div>
      </div>

      <div className="Moneytran-heading">
        <img src={image} alt="" onClick={() => screenchange("back")} />
        <h1 className="heading-money">Transfer Money</h1>
      </div>
      <div className={`main-content-transfer ${optionscreen ? "" : "hidden"}`}>
        <div className="transaction-option">
          <div className="voneytransfer-card">
            <button onClick={() => screenchange("upiid")}>
              Through Upi ID
            </button>
          </div>
          <div className="voneytransfer-card">
            <button onClick={() => screenchange("bank")}>Through Bank</button>
          </div>
        </div>
      </div>
      <div className={`main-content-transfer ${bankscreen ? "" : "hidden"}`}>
        <h1 className="">BANK Transfer</h1>
        {/* Bank transfer content */}
      </div>
      <div className={`main-content-transfer ${Upiscreen ? "" : "hidden"}`}>
        {/* <h1>UPI Transfer</h1> */}
        {/* UPI transfer content */}
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
          <button onClick={sendmoney} type="submit" className="submit-button">
            {"Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Moneytran;
