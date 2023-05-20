import React, { useEffect, useState } from "react";
// import "./css/home.css";
import image from "../image/homebg.jpg";

const Userdashboard = () => {
  console.log("from Dashboard----->>>>>")
  return (
    <>
      <div className="home-body">
        <img src={image} alt="rupeesimage" className="image-home" />
      </div>
    </>
  );
};

export default Userdashboard;
