import React, { useEffect, useState } from "react";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Card Title</h2>
          <p>Card content goes here.- right</p>
        </div>
        <div className="content">
          {/* Add your existing content here */}
          <div className="home-body">
            {/* <img src={image} alt="rupeesimage" className="image-home" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
