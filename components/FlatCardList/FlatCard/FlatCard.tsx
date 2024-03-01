import PrimaryData from '@/components/FlatCardList/FlatCard/PrimaryData/PrimaryData';
import LikeButton from '@/components/Buttons/LikeButton/LikeButton';
import SecondaryData from '@/components/FlatCardList/FlatCard/SecondaryData/SecondaryData';
import Image from 'next/image';
import { FlatI } from '@/interfaces/flat.interface';

interface FlatCardProps {
  flat: FlatI;
}

const FlatCard = ({ ...props }: FlatCardProps) => {
  const {
    floor,
    image,
    release_dates: releaseDate,
    project_title: projectTitle,
  } = props.flat;
  return (
    <div
      className="border-black px-10 py-8 border rounded-xl flex flex-col items-center mb-12 xxs:basis-[100%] xl:basis-[48%] 2xl:basis-[32%] lg:basis-[48%] md:basis-[90%] sm:basis-[100%] xxs:px-4 xxs:py-6"
    >
      <div className="flex flex-wrap justify-between w-[100%] items-center">
        <PrimaryData {...props.flat} />
        <LikeButton />
      </div>
      <Image src={image} alt="Планировка" className="mt-12" width="165" height="287" />
      <SecondaryData project_title={projectTitle} release_dates={releaseDate} floor={floor} />
    </div>
  );
};

export default FlatCard;
