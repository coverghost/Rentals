import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import "./App.css";

import { MyContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <MyContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />}  */}
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </>
  );
}

export default App;
