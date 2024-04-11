import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Circle, Square } from "../svgs";


interface Props {
  text: string;
}

const CustomGraphic = ({ text }: Props) => {
  return <div className="relative flex items-center justify-center mb-44">
    <Parallax translateY={[60, 30]} className="-mr-20 w-14 sm:w-52 z-20">
      <Circle />
    </Parallax>
    <div className="pillow z-10 w-14 sm:w-52">
      <Image src="/images/pillow.webp" width="0" height="0" alt={text} className="w-full h-auto" />
      </div>
    <Parallax translateY={[-90, -30]} className="sm:-ml-20 w-20 sm:w-72">
      <Square />
    </Parallax>
    <div className="z-30 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-wrap">
      {text}
    </div>
  </div>
}

export default CustomGraphic;
