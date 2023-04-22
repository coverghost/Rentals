import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./component/about";
import Home from "./component/Home";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
        </BrowserRouter>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
