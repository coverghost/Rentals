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
          className="banner-image"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        doloribus architecto minus rerum, natus inventore quia, eaque earum nisi
        reiciendis quibusdam. Incidunt optio a enim voluptate quidem culpa earum
        corporis.
      </p>
      <div className="display-part">
        <Display />
      </div>
    </>
  );
};

export default Home;
