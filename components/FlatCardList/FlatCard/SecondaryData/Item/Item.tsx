interface ItemProps {
  name: string,
  property: string,
  isNeedBorder: boolean,
}

const Item = ({
  name,
  property,
  isNeedBorder,
}: ItemProps) => (
  <div className={`flex justify-between mb-2 pb-2 ${isNeedBorder ? 'border-b border-opacity-20 border-black' : ''}`}>
    <div className="t10 opacity-50">{name}</div>
    <div className="t10">{property}</div>
  </div>
);

export default Item;
