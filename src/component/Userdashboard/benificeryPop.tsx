import React, { useContext, useState } from "react";
import "../css/nav.css";
import { Button } from "react-native/types";

const BenifercyPopup = ({ onClose, userlist,token }: any) => {
  console.log("userlist ---- from pop line 5 ------>>>>", userlist,token);
  const handleLogin = () => {
    // Handle login logic here
  };
  let i = 1

  return (
    <div className="BenifercyPopup-popup">
      <button onClick={onClose} className="cross">
        ❌
      </button>
      <div className="BenifercyPopup-popup-content">
        <h1>Add Beneficiary name</h1>
      </div>
      <div className="">
        {userlist?.map((iteam: any, index: any) => (
          <div className="transaction-card" key={index}>
            <p>
              {" "}{i++}{" --------"}{iteam?.personal?.name}{"----------------------------"}{<button>Add</button>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BenifercyPopup;
