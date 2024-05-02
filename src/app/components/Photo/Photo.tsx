import Image from "next/image";

import ImgLeft from "../../assets/images/img-left.png";
import ImgRight from "../../assets/images/img-right.png";

import "./Photo.scss";
type PhotoProps = {
  style?: {};
};

const Photo = ({ style }: PhotoProps) => {
  return (
    <div className="photo" style={style}>
      {/* <img src={ImgLeft} alt="Left" className="photo__img-left" />
      <img src={ImgRight} alt="Right" className="photo__img-right" /> */}

      <Image src={ImgLeft} alt="Left" className="photo__img-left" />
      <Image src={ImgRight} alt="Right" className="photo__img-right" />
    </div>
  );
};

export default Photo;
