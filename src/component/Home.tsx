import React, { useEffect, useState } from "react";
import "./css/home.css";
import homeimage from "./image/home-image.png"

const Home = () => {
  return (
    <>
      <div className="home-body-conatainer">
        <div className="home-body-card">
         <img src={homeimage} alt="bankimage" className="home-body-content"/>
        </div>
      </div>
    </>
  );
};

export default Home;
