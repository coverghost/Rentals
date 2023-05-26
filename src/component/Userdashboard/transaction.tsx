import React, { useState } from "react";

import "../css/transaction.css";


const MoneyTransferForm = ({ userdetail }: any) => {
  console.log(
    "userdetail----->",
    userdetail?.user?.personal?.dob ? userdetail?.user?.personal?.dob : "DD"
  );
  const [showpasww, setshowpassw] = useState(false);
  const showpassword = () => {
    setshowpassw(!showpasww);
  };
  return (
    <>
      {" "}
      <div className="transaction-heading">
        <h5>
          <span className="transaction-heading-name">Account Details</span>{" "}
        </h5>
      </div>
      <div className="transaction-body">
        {/* up  */}
        <div className="transaction-detail-right">
          <div className="transaction-Personal-content-right">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-right">
            <h2>Total Debt</h2>
            <h3>500</h3>
          </div>
          <div className="transaction-Personal-content-right">
            <h2>Total transaction</h2>
            <p>Today : {"50"} <br /> Yesterday : {"10"} <br /> This Week : {"70"}</p>
          </div>
        </div>
        {/* down  */}
        <div className="transaction-detail-down">
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>

          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
          <div className="transaction-Personal-content-down">
            <h2>Total Balance</h2>
            <h3>5,000,000</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyTransferForm;
