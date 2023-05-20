import React, { useEffect, useState } from "react";
import "./css/home.css";
import News from "./news";

const Home = () => {
  return (
    <>
      <div>
        <News/>
      </div>

      <div className="home-body">
        {/* <img src={image} alt="rupeesimage" className="image-home" /> */}
      </div>
    </>
  );
};

export default Home;
