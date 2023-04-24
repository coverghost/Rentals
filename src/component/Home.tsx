import React, { useEffect, useState } from "react";
import "./css/home.css";
import Display from "./image/display";

const Home = () => {
  return (
    <>
      <div>
        <img
          src="https://tourismhimachal.net.in/images/car-banner.jpg"
          alt=""
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div className="display-part">
        <Display />
      </div>
    </>
  );
};

export default Home;
