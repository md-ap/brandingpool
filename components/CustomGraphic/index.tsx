import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Circle, Square } from "../svgs";


interface Props {
  text: string;
}

const CustomGraphic = ({ text }: Props) => {
  return <div className="relative flex items-center pb-44">
    <Parallax translateY={[60, 30]} className="-mr-20 w-52 z-20">
      <Circle />
    </Parallax>
    <div className="pillow z-10 w-52">
      <Image src="/images/pillow.webp" width="0" height="0" alt={text} className="w-full h-auto" />
      </div>
    <Parallax translateY={[-90, -30]} className="-ml-20 w-72">
      <Square />
    </Parallax>
    <div className="makingwaves z-30 absolute left-0 right-0 bottom-0 flex items-center justify-center">
      {text}
    </div>
  </div>
}

export default CustomGraphic;
