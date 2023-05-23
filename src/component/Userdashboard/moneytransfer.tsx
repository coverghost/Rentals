import React, { useState } from "react";
import "../css/moneytransfer.css";

type DebitCardProps = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

// const Moneytransfer: React.FC<DebitCardProps> = ({
//   cardNumber,
//   cardHolder,
//   expirationDate,
//   cvv,
// }) => {
//   return <></>;
// };

const Moneytran = () => {
  const [value, setvalues] = useState<DebitCardProps>();
  const [bankscreen, setbankscreen] = useState(false);
  const [Upiscreen, setUpiscreen] = useState(false);
  const [optionscreen, setoptionscreen] = useState(true);

  const screenchange = (value: any) => {
    switch (value) {
      case "upiid":
        setoptionscreen(false);
        setbankscreen(false);
        setUpiscreen(true);

        break;
      case "bank":
        setoptionscreen(false);
        setbankscreen(true);
        setUpiscreen(false);

        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={`option-for-payment ${optionscreen ? " " : "hidden"}`}>
        <div className="transfer-heading">
          <h1 className="heading-money">Transfer Money</h1> Transfer Money
        </div>
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
      <div className={` ${Upiscreen ? " " : "hidden"}`}>
        <h1>UPI CARD</h1>
      </div>
      <div className={` ${bankscreen ? " " : "hidden"}`}>
        <h1>Bank Card</h1>
      </div>
    </>
  );
};

export default Moneytran;
