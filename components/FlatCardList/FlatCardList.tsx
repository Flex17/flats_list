import { FlatI } from '@/interfaces/flat.interface';
import FlatCard from '@/components/FlatCardList/FlatCard/FlatCard';

interface FlatCardListProps {
  flats: FlatI[];
}

const FlatCardList = ({ flats }: FlatCardListProps) => (
  <div
    className="flex flex-wrap columns-3 justify-between border-t pt-12 border-black border-opacity-20 xxs:justify-center lg:justify-between"
  >
    {flats?.map((flat) => (
      <FlatCard key={flat.id} flat={flat} />
    ))}
  </div>
);

export default FlatCardList;
