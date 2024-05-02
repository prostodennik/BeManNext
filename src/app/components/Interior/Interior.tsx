import Image from "next/image";

import InteriorOne from "../../assets/images/interior-1.png";
import InteriorTwo from "../../assets/images/interior-2.png";
import InteriorThree from "../../assets/images/interior-3.png";
import InteriorFour from "../../assets/images/interior-4.png";

import "./Interior.scss";

const Interior = () => {
  return (
    <div className="interior">
      <Image src={InteriorOne} alt="InteriorPhoto" />
      <Image src={InteriorTwo} alt="InteriorPhoto" />
      <Image src={InteriorThree} alt="InteriorPhoto" />
      <Image src={InteriorFour} alt="InteriorPhoto" />
    </div>
  );
};

export default Interior;
