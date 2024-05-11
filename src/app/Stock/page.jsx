import Image from "next/image";

import ImgStockOne from "../assets/images/stock-1.png";
import ImgStockTwo from "../assets/images/stock-2.png";
import ImgStockThree from "../assets/images/stock-3.png";
import MobileMenu from "../components/MobileMenu/ModileMenu";

import "./Stock.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Stock = () => {
  return (
    <div className="App">
      <Header />
      <MobileMenu cn={"mobile-menu-mob"} />
      <div className="stock__img-wrap">
        <Image className="stock__img" src={ImgStockOne} alt="ImgStock" />
        <Image className="stock__img" src={ImgStockTwo} alt="ImgStock" />
        <Image className="stock__img" src={ImgStockThree} alt="ImgStock" />
      </div>
      <Footer />
    </div>
  );
};

export default Stock;
