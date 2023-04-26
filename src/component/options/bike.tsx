import React, { useEffect, useState } from "react";
import "../css/bike.css";
import Display from "../image/display";
import api from "../../services/api";
import Bikedashboard from "../bikecontroller/bikedashborad";

interface Item {
  id: number;
  name: string;
}
const currentDate = new Date();
const localDate = currentDate.toLocaleString("sv").replace(",", "");
const datetimeValue = localDate.replace(" ", "T");
const Bike = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(datetimeValue);
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);
  const [items, setItems] = useState<Item[]>([]);

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDateTime(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEndDate(event.target.value);
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const [selectedItemId, selectedLocation] = event.target.value.split(",");
    setSelectedItem(items.find((item) => item.id === Number(selectedItemId)));
    setSelectedLocation(selectedLocation);
  };

  const handleSubmit = () => {
    console.log(
      `from date - ${selectedDateTime} to date - ${selectedEndDate} location - ${selectedLocation}`
    );
    // setSelectedDateTime("");
    // setSelectedEndDate("");
    // setSelectedLocation("");
    // setSelectedItem(undefined);
  };

  useEffect(() => {
    fetch(api + "/data")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  console.log("selectedDateTime--->>>", selectedDateTime);
  return (
    <>
      <div style={{backgroundColor:"red"}}>
        <div className="picker_container">
          <div>
            <select
              className="location-picker"
              value={`${selectedItem?.id},${selectedLocation}`}
              onChange={handleLocationChange}
            >
              <option value="">Location...</option>
              {items.map((item) => (
                <option key={item.id} value={`${item.id},${item.name}`}>
                  {item.name}
                </option>
              ))}
            </select>
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
              value={
                selectedEndDate === "Date"
                  ? new Date(selectedEndDate).toISOString().slice(0, 16)
                  : selectedEndDate
              }
              onChange={handleEndDateChange}
            />
          </div>
          <button className="submit_btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
      <div className="bike-Dashboard">
        <Bikedashboard />
      </div>
    </>
  );
};

export default Bike;
