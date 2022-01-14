import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import StoreHeader from "./components/shared/StoreHeader";
import Navigation from "./components/nav/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/nav/Home";
import Mens from "./components/nav/Mens";
import Womens from "./components/nav/Womens";
import Kids from "./components/nav/Kids";

function App() {
  return (
    <div className="m-auto">
      <BrowserRouter>
      <Navigation></Navigation>
      <StoreHeader></StoreHeader>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="mens" element={<Mens />}/>
          <Route path="womens" element={<Womens />}/>
          <Route path="kids" element={<Kids />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
