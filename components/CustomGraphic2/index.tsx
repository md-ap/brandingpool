import { Graphic2 } from "../svgs";
import { Parallax } from "react-scroll-parallax";

interface Props {
  items: {
    title: string;
    subtitle: string;
  }[];
}

const CustomGraphic = ({ items }: Props) => {
  return <div className="flex relative flex-col w-full">
    <Parallax translateY={[-20, 20]} className="w-full py-16 sm:py-24 lg:py-32 xl:py-40 flex opacity-50 lg:opacity-100">
        {/* <Graphic2  /> */}
        <div className="border border-l-0 w-1/5 h-44 sm:h-64 sm:w-1/4 lg:h-80 xl:h-96" style={{ borderColor: '#2473FF'}} />
        <div className="border rounded-full w-44 h-44  sm:h-64 sm:w-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96" style={{ borderColor: '#2473FF'}} />
        <div className="border border-r-0 flex-grow h-44 sm:h-64 lg:h-80 xl:h-96" style={{ borderColor: '#2473FF'}} />
    </Parallax>
    <div className="absolute top-0 left-0 right-0 bottom-0 flex gap-y-8 flex-col lg:flex-row
 justify-center items-center">
      {items.map((item, i) => <div key={`customGraphicTexts-${i}`} className="flex flex-col items-center w-full md:w-1/4">
          <h5 className="w-56 text-center">{item.title}</h5>
          <h4 className="w-56 text-center">{item.subtitle}</h4>
        </div>
      )}
    </div>
  </div>
}

export default CustomGraphic;
