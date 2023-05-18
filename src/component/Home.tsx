import React, { useEffect, useState } from "react";
import "./css/home.css";
import image from "./image/homebg.jpg";

const Home = () => {
  return (
    <>
      <div className="runing-news">
        <p className="news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure enim
          veritatis aperiam quaerat, cum harum unde eveniet maiores.
        </p>
      </div>

      <div className="home-body">
        <img src={image} alt="rupeesimage" className="image-home" />
      </div>
    </>
  );
};

export default Home;
