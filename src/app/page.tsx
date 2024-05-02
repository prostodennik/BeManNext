"use client";

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Stock from "./components/Stock/Stock";
import PriceBasic from "./Price/PriceBasic/PriceBasic";
import PriceAdditionally from "./Price/PriceAdditionally/PriceAdditionally";
import PriceComplex from "./Price/PriceComplex/PriceComplex";
import Contacts from "./Contacts/Contacts";
import Сosmetics from "./Сosmetics/Сosmetics";
import Masters from "./Masters/page";
import Privacy from "./Privacy/Privacy";
import Blog from "./Blog/Blog";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainPage />
        {/* <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/price-basic" element={<PriceBasic />} />
          <Route path="/price-additionally" element={<PriceAdditionally />} />
          <Route path="/price-complex" element={<PriceComplex />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cosmetics" element={<Сosmetics />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
        </Routes> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
