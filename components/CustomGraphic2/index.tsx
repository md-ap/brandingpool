import { Graphic2 } from "../svgs";
import { Parallax } from "react-scroll-parallax";

interface Props {
  items: {
    title: string;
    subtitle: string;
  }[];
}

const CustomGraphic = ({ items }: Props) => {
  return <div className="flex relative -mx-12 w-full">
    <Parallax translateY={[-50, 50]} className="w-full">
      <Graphic2  />
    </Parallax>
    <div className="absolute top-0 left-0 right-0 bottom-0 flex w-full items-center-info">
      {items.map((item, i) => <div key={`customGraphicTexts-${i}`} className="w-1/4">
          <h5>{item.title}</h5>
          <h4 className="w-56 mx-auto">{item.subtitle}</h4>
        </div>
      )}
    </div>
  </div>
}

export default CustomGraphic;
