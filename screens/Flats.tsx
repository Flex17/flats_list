import Header from '@/components/Header/Header';
import FlatCardList from '@/components/FlatCardList/FlatCardList';
import { FlatsResponseI } from '@/interfaces/flatsResponse.interface';
import { FlatService } from '@/services/flat.service';
import FilterBlock from '@/components/FilterBlock/FilterBlock';
import Button from '@/components/Buttons/Button/Button';
import { PER_PAGE, usePagination } from '@/hooks/usePagination';
import { useEffect, useState } from 'react';
import { FlatI } from '@/interfaces/flat.interface';
import { useRouter } from 'next/router';
import FilterIcon from '@/public/filters.svg';
import Image from 'next/image';
import CloseButton from '@/components/Buttons/CloseButton/CloseButton';

const Flats = (responseData: FlatsResponseI) => {
  const {
    data,
  } = responseData;

  const router = useRouter();

  const [flats, setFlats] = useState<FlatI[]>([]);

  const {
    isBtnVisible,
    currentPage,
    setCurrentPage,
    paginationBtnText,
  } = usePagination(data?.meta?.total);

  const fetchMoreFlats = async () => {
    try {
      const res = await FlatService.getAll(router.query, currentPage, PER_PAGE);

      setCurrentPage((prev) => prev + 1);
      setFlats((prev) => [...prev, ...res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setCurrentPage(2);
    setFlats(data.data);
  }, [responseData]);
  const [isFilterWindowOpen, setIsFilterWindowOpen] = useState(false);

  const openFilterWindow = () => {
    setIsFilterWindowOpen(true);
  };
  const closeFilterWindow = () => {
    setIsFilterWindowOpen(false);
  };

  return (
    <div className="lg:px-20 lg:py-8 h-[100%] xxs:p-[20px]">
      <Header>{isFilterWindowOpen ? 'Фильтры' : 'Планировки'}</Header>

      <div className={`xxs:${isFilterWindowOpen ? 'block' : 'hidden'} md:block`}>
        {isFilterWindowOpen && (
        <div className="justify-end xxs:flex md:hidden">
          <CloseButton onClick={closeFilterWindow} />
        </div>
        )}
        <FilterBlock flatsCount={data?.meta?.total} />
        {isFilterWindowOpen && (
        <div className="mt-12"><Button onClick={closeFilterWindow}>Смотреть квартиры</Button></div>
        )}
      </div>

      {!isFilterWindowOpen && (
      <>
        <div className="xxs:block md:hidden">
          <Button onClick={openFilterWindow}>
            <div className="flex justify-center items-center">
              <span className="mr-1">Фильтры</span>
              <Image src={FilterIcon} alt="Иконка фильтров" width={16} height={16} />
            </div>
          </Button>
        </div>
        <FlatCardList flats={flats} />
        {isBtnVisible && (
        <div className="flex justify-center">
          <Button
            onClick={fetchMoreFlats}
          >
            {paginationBtnText}
          </Button>
        </div>
        )}
      </>
      )}
    </div>
  );
};

export default Flats;
