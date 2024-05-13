"use client";

import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./components/Footer/Footer";

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
