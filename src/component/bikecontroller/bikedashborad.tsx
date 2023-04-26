import React, { useEffect, useState } from "react";
import "../css/bike.css";
import api from "../../services/api";

interface Item {
  id: number;
  company: string;
  model: string;
  color: string;
  img: string;
  engine: {
    mileage: number;
    cc: number;
    power: number;
    torque: number;
    fuelcapacity: number;
    cylinders: number;
    gearbox: number;
  };
  break: string;
  height: number;
  groundclear: number;
  weight: number;
}

const Bikedashboard = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch(api + "/bike-dashboard")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  console.log("selectedDateTime--->>>", items);
  return (
    <>
      <div className="bike-dashboard-heading">
        <h1>bike Dashboard</h1>
      </div>
      <div className="card-area">
        {items.map((item, index) => (
          <div className="card-container">
            <div className="card" key={index}>
              <img src={item.img} alt={item.break} className="bike-image" />
              <h2>Brand : {item.company}</h2>
              <h4>Model : {item.model}</h4>
              <div className="information">
                <h4 style={{ marginTop: "13px", color: "black" }}>
                  Information
                </h4>
                <span
                  style={{
                    float: "right",
                    marginTop: "-12px",
                    marginRight: "40px",
                    // display: "none",
                  }}
                >
                  <span>
                    <table>
                      <tr>
                        <td>Power </td>
                        <td>: {item.engine.cc} Cc</td>
                      </tr>
                      <tr>
                        <td>Gear </td>
                        <td>: {item.engine.gearbox}</td>
                      </tr>
                      <tr>
                        <td>torque </td>
                        <td>: {item.engine.torque} Nm</td>
                      </tr>
                    </table>
                  </span>
                </span>
                <span
                  style={{
                    float: "left",
                    marginTop: "-12px",
                    marginLeft: "40px",
                    // display: "none"
                  }}
                >
                  <span>
                    <table>
                      <tr>
                        <td>height </td>
                        <td>: {item.height}</td>
                      </tr>
                      <tr>
                        <td>groundclearation </td>
                        <td>: {item.groundclear}</td>
                      </tr>
                      <tr>
                        <td>weight </td>
                        <td>: {item.weight}</td>
                      </tr>
                    </table>
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bikedashboard;
