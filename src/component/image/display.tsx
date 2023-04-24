import React from "react";
import { Link } from "react-router-dom";
import "../css/display.css";
import bikeimage from "./motorcycle.png";
import carimage from "./pickup.png";
import girlimage from "./girl.png";
import houseimage from "./house.png";

const Display = () => {
  return (
    <>
      <div>
        <h1>Things we provide on Rent</h1>
        <div>
          <ul className="ul-iteams">
            <li className="ul-items-li ">
              <Link to="/Bike" className="service-name">
                <img src={bikeimage} alt="bike option" className="option-img" />{" "}
                <div></div> Bike
              </Link>
            </li>
            <li className="ul-items-li ">
              <Link to="/car" className="service-name">
                <img src={carimage} alt="bike option" className="option-img" />
                <div></div>Car
              </Link>
            </li>
            <li className="ul-items-li ">
              <Link to="/girlfriend" className="service-name">
                <img src={girlimage} alt="bike option" className="option-img" />
                Girlfriend
              </Link>
            </li>
            <li className="ul-items-li ">
              <Link to="/House" className="service-name">
                <img
                  src={houseimage}
                  alt="bike option"
                  className="option-img"
                />
                House
              </Link>
            </li>
            {/* <li>
              <Link to="/contact"><img src={carimage} alt="bike option" className="option-img" /></Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Display;
