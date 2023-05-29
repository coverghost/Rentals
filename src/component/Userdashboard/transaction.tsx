import React, { useState } from "react";

import "../css/transaction.css";

const MoneyTransferForm = ({ userdetail }: any) => {
  
  console.log("userdetail ---- line 11 --->", userdetail?.useracount[0]);
  const data = userdetail?.userTransaction ? userdetail?.userTransaction : [];
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
            <h3>{(userdetail?.useracount[0].totalamount)?(userdetail?.useracount[0].totalamount):"0"}</h3>
          </div>
          <div className="transaction-Personal-content-right">
            <h2>Total Debt</h2>
            <h3>{(userdetail?.useracount[0].totaldebt)?(userdetail?.useracount[0].totaldebt):"0"}</h3>
          </div>
          <div className="transaction-Personal-content-right">
            <h2>Total transaction</h2>
            <p>
              Today : {"50"} <br /> Yesterday : {"10"} <br /> This Week : {"70"}
            </p>
          </div>
        </div>
        {/* down  */}
        <div className="scroll-heading">
          <p>Trasactions </p>
          <p className="transaction-card-heading-box">
            <span className="transaction-card-heading-10">To User</span>
            <span className="transaction-card-heading-20">Transaction Id</span>
            <span className="transaction-card-heading-30">Amount</span>
            <span className="transaction-card-heading-40">Upi/Bank</span>
            <span className="transaction-card-heading-50">Date || Time</span>
          </p>
        </div>
        <div className="transaction-detail-down">
          {data?.map((item: any, index: any) => (
            data.length < 1?"no transaction":
            (<div className="transaction-card" key={index}>
              <p>
                <table>
                  <td>
                    <span className="transaction-card-heading-1">
                      {item?.user?.userName}
                    </span>
                  </td>
                  <td>
                    <span className="transaction-card-heading-2">
                      {item?.orderId}
                    </span>
                  </td>
                  <td>
                    <span className="transaction-card-heading-3">
                      {item?.amount}
                    </span>
                  </td>
                  <td>
                    <span className="transaction-card-heading-4">
                      {item?.transfrom?.upi ? "UPI" : "BANK"}
                    </span>
                  </td>
                  <td>
                    <span className="transaction-card-heading-5">
                      {`${new Date(item.createdAt).toLocaleDateString()} || ${new Date(item.createdAt).toLocaleTimeString()}`}
                    </span>
                  </td>
                </table>
              </p>
              {/* Other card content */}
            </div>)
          ))}
        </div>
      </div>
    </>
  );
};

export default MoneyTransferForm;
