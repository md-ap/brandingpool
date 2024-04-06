import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Circle, Square } from "../svgs";


interface Props {
  text: string;
}

const CustomGraphic = ({ text }: Props) => {
  return <div className="relative flex items-center">
    <Parallax translateY={[-30, 30]} className="-mr-12 w-32">
      <Circle />
    </Parallax>
    <div className="w-32">
      <Image src="/images/pillow.webp" width="0" height="0" alt={text} className="w-full h-auto" />
      </div>
    <Parallax translateY={[30, -30]} className="-ml-12 w-44">
      <Square />
    </Parallax>
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      {text}
    </div>
  </div>
}

export default CustomGraphic;
