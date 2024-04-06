import Image from "next/image";
import DOMPurify from 'isomorphic-dompurify';
import { useState } from "react";

interface Props {
  image: string;
  animation: string;
  title: string;
  link?: string;
}

const PortfolioItem = ({ image, animation, title, link }: Props) => {
  const [currentImage, setCurrentImage] = useState(image);
  return <a href={link || '/'} onMouseEnter={() => setCurrentImage(animation)} onMouseLeave={() => setCurrentImage(image)} className="relative w-full">
      <Image src={currentImage} alt={title} width="0" height="0" className="w-full h-auto" />
      <h4 className="absolute left-4 bottom-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title)}}/>
    </a>
}
export default PortfolioItem;
