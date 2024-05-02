import { StaticImageData } from "next/image";

export interface IBlogCardProps {
  name: string;
  position: string;
  photoSrc: StaticImageData;
  alt: string;
  paragraphs: string[];
}
