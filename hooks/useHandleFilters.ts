import { ProjectI } from '@/interfaces/projectI.interface';
import { queryParams } from '@/hooks/useQuery';
import { RoomT } from '@/interfaces/filtersResponse.interface';
import { useHandleQuery } from '@/hooks/useHandleQuery';

export const useHandleFilters = () => {
  const { onRouterPush } = useHandleQuery();

  const handleProjects = (projects: ProjectI[]) => {
    const projectIds = projects.map((project) => project.id);

    const newQuery = {
      [queryParams.projectsQuery]: projectIds,
    };

    onRouterPush(newQuery);
  };

  const handleRooms = (rooms: RoomT[]) => {
    const newQuery = {
      [queryParams.roomsQuery]: rooms,
    };

    onRouterPush(newQuery);
  };

  const handlePrice = (price: number[]) => {
    const newQuery = {
      [queryParams.priceMinQuery]: price[0],
      [queryParams.priceMaxQuery]: price[1],
    };

    onRouterPush(newQuery);
  };

  const handleSquare = (square: number[]) => {
    const newQuery = {
      [queryParams.squareMinQuery]: square[0],
      [queryParams.squareMaxQuery]: square[1],
    };

    onRouterPush(newQuery);
  };

  return {
    handlePrice,
    handleProjects,
    handleRooms,
    handleSquare,
  };
};
