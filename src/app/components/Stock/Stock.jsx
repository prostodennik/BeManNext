import Image from "next/image";

import ImgStockOne from "../../assets/images/stock-1.png";
import ImgStockTwo from "../../assets/images/stock-2.png";
import ImgStockThree from "../../assets/images/stock-3.png";
import MobileMenu from "../MobileMenu/ModileMenu";
import InstallPWA from "../InstallPWA/InstallPWA";

import "./Stock.scss";

const Stock = () => {
  return (
    <>
      <InstallPWA />
      <MobileMenu cn={"mobile-menu-mob"} />
      <div className="stock__img-wrap">
        <Image className="stock__img" src={ImgStockOne} alt="ImgStock" />
        <Image className="stock__img" src={ImgStockTwo} alt="ImgStock" />
        <Image className="stock__img" src={ImgStockThree} alt="ImgStock" />
      </div>
    </>
  );
};

export default Stock;
