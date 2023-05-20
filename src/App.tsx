import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import "./App.css";

import { MyContext, MyContextProvider } from "./context/Context";
import Userdashboard from "./component/Userdashboard/dashboard";

function App() {
  const { unitoken } = useContext(MyContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={unitoken ? "/dashboard" : "/"} element={<Userdashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppWithProvider() {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  );
}

export default AppWithProvider;
