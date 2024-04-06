interface Props {
  items: {
    title: string;
    subtitle: string;
  }[];
}

const CustomGraphic = ({ items }: Props) => {
  return <div>
    {items.map((item, i) => <div key={`customGraphicTexts-${i}`}>
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
      </div>
    )}
  </div>
}

export default CustomGraphic;
