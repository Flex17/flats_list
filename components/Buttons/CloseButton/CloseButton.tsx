import Image from 'next/image';
import CloseIcon from '@/public/close.svg';

interface CloseButtonProps {
  onClick: () => void,
}

const CloseButton = ({
  onClick,
}: CloseButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full p-2 bg-zinc-600 inline-block cursor-pointer"
  >
    <Image src={CloseIcon} alt="Крестик" width={11} height={11} />
  </button>
);

export default CloseButton;
