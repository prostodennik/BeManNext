import React from "react";
import Top from "../components/Top/Top";
import About from "../components/About/About";
import Price from "../components/Price/Price";
import Photo from "../components/Photo/Photo";
import Contacts from "../components/Contacts/Contacts";
import Interior from "../components/Interior/Interior";

const MainPage = () => {
  return (
    <>
      <Top />
      <About />
      <Interior />
      <Price />
      <Photo />
      <Contacts />
    </>
  );
};

export default MainPage;
