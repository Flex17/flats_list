import { FiltersResponseI } from '@/interfaces/filtersResponse.interface';
import { FilterService } from '@/services/filter.service';
import { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Dropdown from '@/components/FilterBlock/Dropdown/Dropdown';
import RoomsBlock from '@/components/FilterBlock/RoomsBlock/RoomsBlock';
import RangeSlider from '@/components/FilterBlock/RangeSlider/RangeSlider';
import Image from 'next/image';
import RefreshIcon from '@/public/refresh.svg';
import { formatWord } from '@/helpers/formatWord';
import { useFilters } from '@/hooks/useFilters';
import { useHandleFilters } from '@/hooks/useHandleFilters';

interface FilterBlockProps {
  flatsCount: number;
}

const FilterBlock = ({ flatsCount }: FilterBlockProps) => {
  const [filters, setFilters] = useState<FiltersResponseI>();

  const {
    values,
    clearFilters,
    setPriceValue,
    setSquareValue,
    setCurrentRooms,
    setCurrentProjects,
  } = useFilters(filters);

  const {
    currentProjects,
    currentRooms,
    priceValue,
    squareValue,
  } = values;

  const {
    handleProjects,
    handleSquare,
    handlePrice,
    handleRooms,
  } = useHandleFilters();

  useEffect(() => {
    handleProjects(currentProjects);
  }, [currentProjects]);

  useEffect(() => {
    handleRooms(currentRooms);
  }, [currentRooms]);

  useEffect(() => {
    FilterService.getFilters()
      .then((res) => {
        const { data } = res;

        setFilters(data);

        if (!priceValue.length) setPriceValue([data.price.min, data.price.max]);
        if (!squareValue.length) setSquareValue([data.square.min, data.square.max]);
      });
  }, []);

  return (
    <div>
      <div
        className="flex items-center xxs:flex-col 3xl:flex-row 3xl:max-w-[100%] md:max-w-[100%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%] my-0 mx-auto"
      >
        <div className="xxs:mb-8 3xl:mb-0 3xl:mr-5 w-[100%]">
          <Dropdown
            currentItems={currentProjects}
            projects={filters?.projects}
            setCurrentItems={setCurrentProjects}
          />
        </div>
        <RoomsBlock
          currentRooms={currentRooms}
          setCurrentNumbers={setCurrentRooms}
          rooms={filters?.rooms}
        />
        <div className="xxs:mb-8 xxs:mt-8 w-[100%]">
          <RangeSlider
            min={filters?.price.min}
            max={filters?.price.max}
            value={priceValue}
            setValue={setPriceValue}
            label="Стоимость, ₽"
            handleValue={handlePrice}
          />
        </div>
        <div className="w-[100%]">
          <RangeSlider
            min={filters?.square.min || 0}
            max={filters?.square.max || 0}
            value={squareValue}
            setValue={setSquareValue}
            label="Задайте площадь, м²"
            handleValue={handleSquare}
          />
        </div>
      </div>
      <div className="relative flex justify-center pt-12 pb-16 xxs:hidden md:flex">
        <div className="inline-block">
          Найдено
          {' '}
          {formatWord(flatsCount, 'квартира', 'квартиры', 'квартир')}
        </div>
        <div
          role="presentation"
          className="cursor-pointer t10 absolute right-0 inline-flex items-center"
          onClick={clearFilters}
        >
          <Image src={RefreshIcon} alt="Значок обновления" width={12} className="mr-3" />
          <div>Очистить всё</div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
