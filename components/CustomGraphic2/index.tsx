import { Graphic2 } from "../svgs";
import { Parallax } from "react-scroll-parallax";

interface Props {
  items: {
    title: string;
    subtitle: string;
  }[];
}

const CustomGraphic = ({ items }: Props) => {
  return <div className="flex relative flex-col">
    <Parallax translateY={[-50, 50]} className="w-full mx-auto">
      <Graphic2  />
    </Parallax>
    <div className="relative md:absolute top-0 left-0 right-0 bottom-0 flex gap-y-8 flex-col md:flex-row
 justify-center items-center">
      {items.map((item, i) => <div key={`customGraphicTexts-${i}`} className="w-full md:w-1/4">
          <h5 className="w-56 mx-auto text-center">{item.title}</h5>
          <h4 className="w-56 mx-auto text-center">{item.subtitle}</h4>
        </div>
      )}
    </div>
  </div>
}

export default CustomGraphic;
