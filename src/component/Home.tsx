import React, { useEffect, useState } from "react";
import "./css/home.css";
import homeimage from "./image/home-image.png";

const Home = () => {
  return (
    <>
      <div className="home-body-conatainer">
        
        <div className="home-body-card">
          <img src={homeimage} alt="bankimage" className="home-body-content" />
        </div>
        <div className="home-content">
          <div>
            <h1>Online Banking</h1>
            <h4>" The Power and Convenience of Online Banking. "</h4>
            <p>
              Online banking has transformed the way we handle our finances. It
              offers convenience, allowing us to access our accounts, make
              transactions, and pay bills from anywhere. With robust security
              measures in place, online banking ensures our financial
              information is safe. Embrace the ease and efficiency of online
              banking today.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <h1>Ayush Arya</h1>
      </div>
      <div className="footer-section">
        <h1>Footer Section</h1>
      </div>
    </>
  );
};

export default Home;
