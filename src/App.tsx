import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/about";
import Contact from "./component/Contact";
import "./App.css";
import Bike from "./component/options/bike";
import Car from "./component/options/Car";
import House from "./component/options/House";
import GF from "./component/options/Gf";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Bike" element={<Bike />} />
          <Route path="/girlfriend" element={<GF />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/House" element={<House />} />

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
