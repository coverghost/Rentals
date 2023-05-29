import React, { useState } from "react";
import "../css/profile.css";
import open_image from "../image/open-eye.png"
import close_image from "../image/close-eye.png"

const Profile = ({ userdetail }: any) => {
  const [showpasww ,setshowpassw] = useState(false)
  const showpassword = ()=>{
    setshowpassw(!showpasww)
  }

  return (
    <>
      {" "}
      <div className="profile-heading">
        <h5>
          <span className="profile-heading-name">User Profile</span>{" "}
        </h5>
      </div>
      <div className="profile-body">
        {/* right  */}
        <div className="Personal-detail-right">
          <div className="Personal-content-right">
            <h1>Card Detail</h1>
          </div>
          <div className="Personal-content-right">
            <h1>Personal-detail-right</h1>
          </div>
        </div>
        {/* left  */}
        <div className="Personal-detail-left">
          <div className="Personal-content-left">
            <h1>Personal Detail</h1>
            <table>
              <td>
                <tr>Name{" "}</tr>
                <tr>Mobile{" "}</tr>
                <tr>Password{" "}</tr>
                <tr>DOB{" "}</tr>
              </td>
              <td>
                <tr>:{""}</tr>
                <tr>:{""}</tr>
                <tr>:{""}</tr>
                <tr>:{""}</tr>
              </td>
              <td>
                <tr>{userdetail?.user?.personal?.name}</tr>
                <tr>{userdetail?.user?.personal?.mobile}</tr>
                <tr>{showpasww?(userdetail?.user?.personal?.password):"*******"}</tr>
                <tr>{(userdetail?.user?.personal?.dob)?(userdetail?.user?.personal?.dob):"DD-MM-YYYY"}</tr>
              </td>
              <td>
                <tr>{" "}</tr>
                <tr>{" "}</tr>
                <tr>{" "}<button className="show-password" onClick={showpassword}><span className="monkey-emoji">{showpasww ? <img src={open_image} alt="" />:<img src={close_image} alt="" />}</span> </button></tr>
                <tr>{" "}</tr>
              </td>
            </table>
          </div>
          <div className="Personal-content-left">
            <h1>Bank Detail</h1>
            <table>
              <td>
                <tr>Bank Name{" "}</tr>
                <tr>Ifsc Code{" "}</tr>
                <tr>ACC. No{" "}</tr>
                <tr>Upi Id{" "}</tr>
              </td>
              <td>
                <tr>:{" "}</tr>
                <tr>:{" "}</tr>
                <tr>:{" "}</tr>
                <tr>:{" "}</tr>
              </td>
              <td>
                <tr>{userdetail?.user?.bankDetails?.bankName}</tr>
                <tr>{userdetail?.user?.bankDetails?.ifsc}</tr>
                <tr>{userdetail?.user?.bankDetails?.accountNumber}</tr>
                <tr>{" "}{userdetail?.user?.bankDetails?.upiId}</tr>
              </td>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
