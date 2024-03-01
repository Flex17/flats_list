import { ProjectI } from '@/interfaces/projectI.interface';
import ChoicedIcon from '@/public/choiced.svg';
import Image from 'next/image';

interface DropdownItemProps {
  project: ProjectI,
  isActive: boolean,
  onChoice: (e: React.MouseEvent, project: ProjectI) => void,
}

const DropdownItem = ({
  onChoice,
  project,
  isActive,
}: DropdownItemProps) => {
  const {
    title,
  } = project;
  return (
    <div
      role="presentation"
      className="p-2 cursor-pointer flex justify-between items-center"
      onClick={(e) => onChoice(e, project)}
    >
      {title}
      {isActive && <Image src={ChoicedIcon} alt="Галочка" width={15} />}
    </div>
  );
};

export default DropdownItem;
