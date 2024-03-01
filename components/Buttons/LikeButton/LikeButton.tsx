import Image from 'next/image';
import LikeIcon from '@/public/like.svg';

const LikeButton = () => (
  <div
    className="md:py-4 md:px-4 border inline-flex items-center border-black xxs:p-3 rounded-full cursor-pointer "
  >
    <Image
      src={LikeIcon}
      alt="Значок нравится"
      height="19"
      className="xxs:h-[11px] xxs:w-[11px] md:h-[19px] md:w-[19px]"
    />
  </div>
);

export default LikeButton;
