import Image from 'next/image';
import { ProjectI } from '@/interfaces/projectI.interface';
import DropdownItem from '@/components/FilterBlock/Dropdown/DropdownItem/DropdownItem';
import React, { useState } from 'react';
import dropDownOpenIcon from '@/public/dropDownOpen.svg';
import dropDownCloseIcon from '@/public/dropwDownClose.svg';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import FilterLabel from '@/components/FilterBlock/FilterLabel/FilterLabel';
import { formatWord } from '@/helpers/formatWord';

interface DropdownProps {
  currentItems: ProjectI[],
  setCurrentItems: (value: ProjectI[]) => void,
  projects: ProjectI[] | undefined;
}

const Dropdown = ({
  projects,
  setCurrentItems,
  currentItems,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const onChoiceProjects = (e: React.MouseEvent, project: ProjectI) => {
    e.stopPropagation();
    if (currentItems.includes(project)) {
      const filteredProjects = currentItems.filter((item) => item !== project);
      setCurrentItems(filteredProjects);
    } else {
      setCurrentItems([...currentItems, project]);
    }
  };

  const openCloseArrow = isOpen
    ? <Image src={dropDownOpenIcon} alt="Стрелка вверх" width="9" />
    : <Image src={dropDownCloseIcon} alt="Стрелка вниз" width="9" />;

  const formattedDropdownText = currentItems.length > 0
    ? `Выбрано: ${formatWord(currentItems.length, 'проект', 'проекта', 'проектов')}`
    : 'Все';

  return (
    <div className="w-[100%]">
      {/* <div className="max-w-md w-[100%]"> */}
      <FilterLabel>Проект</FilterLabel>
      <div
        role="presentation"
        className=" w-[100%]"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={ref}
      >
        <div
          className={`flex justify-between items-center border border-black-100 border-opacity-75 py-3 px-6 cursor-pointer border-1 rounded-xl ${isOpen ? 'rounded-b' : ''}`}
        >
          <span>{formattedDropdownText}</span>
          {openCloseArrow}
        </div>

        <div className="max-w-[100%] relative">
          <div
            className={`absolute bg-milk z-10 border border-t-0 border-black ${isOpen ? 'w-[100%]' : 'hidden'}`}
          >
            {projects?.map((project) => (
              <DropdownItem
                key={project.id}
                project={project}
                onChoice={onChoiceProjects}
                isActive={currentItems.includes(project)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
