import { IMastersCardProps } from "../components/MastersCard/type";
import { MastersCard } from "../components/MastersCard/MastersCard";

import Master1 from "../assets/images/master-1.png";
import Master2 from "../assets/images/master-2.png";

import Btn from "../components/Btn/Btn";
import MobileMenu from "../components/MobileMenu/ModileMenu";

import "./Masters.scss";

const mockDataMasters: IMastersCardProps[] = [
  {
    name: "Бек",
    position: "Топ барбер",
    alt: "Барбер",
    paragraphs: [
      "Бек – это настоящий профессионал своего дела, обладающий не только высоким уровнем навыков стрижки и бритья, но и особым талантом общения с клиентами.",
      "Он стремится быть лучшим в своей области и всегда готов учиться новому, чтобы предложить своим клиентам самые современные и качественные услуги.",
    ],
    photoSrc: Master2,
  },
  {
    name: "Анастасия",
    position: "Барбер",
    alt: "Барбер",
    paragraphs: [
      "Анастасия – это настоящий профессионал своего дела, обладающий не только высоким уровнем навыков стрижки и бритья, но и особым талантом общения с клиентами.",
      "Она стремится быть лучшей в своей области и всегда готова учиться новому, чтобы предложить своим клиентам самые современные и качественные услуги.",
    ],
    photoSrc: Master1,
  },
];

const Masters = () => {
  return (
    <>
      <MobileMenu cn="mobile-menu-mob logo-black" />

      <div className="masters container">
        <div className="masters__title-block">
          <h2 className="masters__title page-title">Наши мастера</h2>
          <h3 className="masters__subtitle page-subtitle">
            Знакомьтесь с командой профессионалов!
          </h3>
        </div>

        <div className="masters__list">
          {mockDataMasters.map(
            (masterProps: IMastersCardProps, index: number) => {
              return <MastersCard {...masterProps} key={index} />;
            }
          )}
        </div>
      </div>
      <div className="sign-up">
        <Btn style={{ width: "22.8rem" }} />
      </div>
    </>
  );
};

export default Masters;
