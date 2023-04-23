import React, { useEffect, useState } from "react";
import api from "../services/api";
const Contact = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(api+'/data')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  console.log("api--->>>", message);
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <p>
          We are a company that specializes in providing high-quality products
          and services.
        </p>
      </div>
    </>
  );
};
export default Contact;
