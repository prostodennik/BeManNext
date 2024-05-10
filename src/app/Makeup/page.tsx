import Image from "next/image";

import Btn from "../components/Btn/Btn";
import Morgans from "../assets/images/morgans.png";
import BrandBenefit from "../components/BrandBenefit/BrandBenefit";
import MobileMenu from "../components/MobileMenu/ModileMenu";

import "./Makeup.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const brandBenefits = [
  "Английское качество",
  "Сертифицировано и абсолютно безопасно",
  "Широкий выбор средств и ароматов",
  "Доступная стоимость",
];

const Сosmetic = () => {
  return (
    <>
      <Header />
      <MobileMenu cn="mobile-menu-mob" />

      <div className="makeup">
        <div className="makeup__title-block">
          <div className="makeup__title page-title">Косметика</div>
          <div className="makeup__subtitle page-subtitle">
            работаем только с лучшими брендами
          </div>
        </div>
        <div className="makeup__morgans">
          <Image src={Morgans} alt={`Morgan's`} />
        </div>

        <div className="makeup__brand-description">
          <p>
            Основанная в 1873 году компания Morgan&apos;s сейчас известна во
            всем мире и является воплощением старомодных ценностей. Мы гордимся
            тем, что используем эту косметику в работе и рекомендуем её каждому
            нашему гостю.
          </p>
        </div>

        <div className="makeup__brand-benefits">
          <div className="makeup__brand-benefits-title">
            Почему в своей работе мы выбрали именно этот бренд:
          </div>
          <div className="makeup__benefits">
            {brandBenefits.map((benefitDescription: string, index: number) => {
              return (
                <BrandBenefit
                  description={benefitDescription}
                  className="makeup__benefits-item"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="sign-up">
        <Btn style={{ width: "22.8rem" }} />
      </div>
      <Footer />
    </>
  );
};

export default Сosmetic;
