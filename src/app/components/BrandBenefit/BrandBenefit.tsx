import * as React from "react";
import Image from "next/image";
import { IBrandBenefitProps } from "./type";

import DoneIcon from "../../assets/icons/done.svg";

import "./BrandBenefit.scss";

export const BrandBenefit: React.FC<IBrandBenefitProps> = (
  props: IBrandBenefitProps
): React.ReactElement => {
  return (
    <div className={`brand-benefit ${props.className}`}>
      <div className="brand-benefit__icon">
        <Image src={DoneIcon} alt="DoneIcon" />
      </div>
      <div className="brand-benefit__description">{props.description}</div>
    </div>
  );
};
