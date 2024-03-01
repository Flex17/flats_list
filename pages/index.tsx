import { GetServerSideProps, NextPage } from 'next';
import Flats from '@/screens/Flats';
import { FlatsResponseI } from '@/interfaces/flatsResponse.interface';
import { FlatService } from '@/services/flat.service';
import { PER_PAGE } from '@/hooks/usePagination';

const HomePage: NextPage<FlatsResponseI> = ({ ...responseData }: FlatsResponseI) => (
  (
    <Flats data={responseData.data} />
  )
);

export const getServerSideProps: GetServerSideProps<{ data: FlatsResponseI }> = async (context) => {
  const { query } = context;

  const flatsData = await FlatService.getAll(query, 1, PER_PAGE);

  return {
    props: { data: flatsData },
  };
};

export default HomePage;
