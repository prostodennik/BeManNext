"use client";

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Stock from "./Stock/page";
import PriceBasic from "./Price/PriceBasic/page";
import PriceAdditionally from "./Price/PriceAdditionally/page";
import PriceComplex from "./Price/PriceComplex/page";
import Contacts from "./Contacts/page";
import Сosmetics from "./Makeup/page";
import Masters from "./Masters/page";
import Privacy from "./Privacy/page";
import Blog from "./Blog/page";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
