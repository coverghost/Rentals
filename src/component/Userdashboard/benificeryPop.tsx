import React, { useContext, useState } from "react";
import "../css/nav.css";
import { Button } from "react-native/types";
import { dashboarService } from "../dashboardservice.tsx/dashboard";

const BenifercyPopup = ({ onClose, userlist, token }: any) => {
  const [alluser,setalluser] = useState("")
  let i = 1;
  
  const addben = async (userid:any) => {
    console.log("user id from adben ------LInme 14",userid)
    const value = userid;
    try {
      const senddata = await dashboarService.AddBeneficary(token, value);
      setalluser(senddata);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

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
              {" ----- "}
              {i++}
              {" --------"}
              {iteam?.personal?.name}
              {"----------------------------"}
              {iteam?.bankDetails?.upiId}
              {"----------------------------"}


              
              {console.log("object",iteam?.userId)}
              {<button onClick={()=>{addben(iteam?.userId)}}>{"add"}</button>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BenifercyPopup;