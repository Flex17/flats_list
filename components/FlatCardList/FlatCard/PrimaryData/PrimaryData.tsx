import PriceBlock from '@/components/FlatCardList/FlatCard/PrimaryData/PriceBlock/PriceBlock';

interface PrimaryDataProps {
  'rooms': 'string',
  'studio': true,
  'price': 0,
  'old_price': 0,
  'square': 0,
}

const PrimaryData = ({
  square,
  rooms,
  price,
  old_price,
  studio,
}: PrimaryDataProps) => (
  <div>
    <div className="t6 mb-2">
      {studio ? 'Студия ' : `${rooms}-комнатная `}
      <span>
        {square}
        {' '}
        м
        <sup>2</sup>
      </span>
    </div>
    <PriceBlock price={price} old_price={old_price} />
  </div>
);

export default PrimaryData;
