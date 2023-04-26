import React, { useEffect, useState } from "react";
import "./css/home.css";
import Display from "./image/display";

const Home = () => {
  return (
    <>
      <div className="home-body">
        <div>
          <img
            className="banner-image"
            src="https://tourismhimachal.net.in/images/car-banner.jpg"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus architecto minus rerum, natus inventore quia, eaque earum
          nisi reiciendis quibusdam. Incidunt optio a enim voluptate quidem
          culpa earum corporis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas doloribus architecto minus rerum, natus
          inventore quia, eaque earum nisi reiciendis quibusdam. Incidunt optio
          a enim voluptate quidem culpa earum corporis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus architecto minus rerum, natus inventore quia, eaque earum
          nisi reiciendis quibusdam. Incidunt optio a enim voluptate quidem
          culpa earum corporis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas doloribus architecto minus rerum, natus
          inventore quia, eaque earum nisi reiciendis quibusdam. Incidunt optio
          a enim voluptate quidem culpa earum corporis.
        </p>
        <div className="display">
          <div className="display-part">
            <Display />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus architecto minus rerum, natus inventore quia, eaque earum
          nisi reiciendis quibusdam. Incidunt optio a enim voluptate quidem
          culpa earum corporis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas doloribus architecto minus rerum, natus
          inventore quia, eaque earum nisi reiciendis quibusdam. Incidunt optio
          a enim voluptate quidem culpa earum corporis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus architecto minus rerum, natus inventore quia, eaque earum
          nisi reiciendis quibusdam. Incidunt optio a enim voluptate quidem
          culpa earum corporis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas doloribus architecto minus rerum, natus
          inventore quia, eaque earum nisi reiciendis quibusdam. Incidunt optio
          a enim voluptate quidem culpa earum corporis.
        </p>
      </div>
    </>
  );
};

export default Home;
