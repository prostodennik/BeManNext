import { StaticImageData } from "next/image";

export interface IMastersCardProps {
  name: string;
  position: string;
  photoSrc: StaticImageData;
  alt: string;
  paragraphs: string[];
}
