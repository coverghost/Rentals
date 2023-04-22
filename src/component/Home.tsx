import React, { useState } from "react";
import "./css/home.css";
const Home = () => {
  const [selectedDateTime, setSelectedDate] = useState("");
  const [selectedendDate, setSelectedendDate] = useState("");

  const handleDateTimeChange = (event: any) => {
    setSelectedDate(event.target.value);
  };
  const handleendDateChange = (event: any) => {
    setSelectedendDate(event.target.value);
  };
  return (
    <>
      <div className="picker_container">
        <div>
          <input
            className="date-time-picker"
            type="text"
            id="date-time-picker"
            placeholder="Location"
            // value={selectedDateTime}
            // onChange={handleDateTimeChange}
          />
        </div>
        <div>
          <input
            className="date-time-picker"
            type="datetime-local"
            id="date-time-picker"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
          />
          <input
            className="date-time-picker"
            type="datetime-local"
            id="date-picker"
            value={selectedendDate}
            onChange={handleendDateChange}
          />
        </div>
        <button className="submit_btn">SUBMIT</button>
      </div>
    </>
  );
};
export default Home;
