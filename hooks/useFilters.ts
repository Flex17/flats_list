import { useEffect, useState } from 'react';
import { FiltersResponseI, RoomT } from '@/interfaces/filtersResponse.interface';
import { ProjectI } from '@/interfaces/projectI.interface';
import { useQuery, useRemoveQuery } from '@/hooks/useQuery';

type QueryT = string | string[] | undefined;
const setInitialPrice = (priceMin: QueryT, priceMax: QueryT) => {
  if (priceMin && priceMax) {
    return [Number(priceMin), Number(priceMax)];
  }
  return [];
};

const setInitialRoom = (rooms: QueryT) => {
  if (rooms) {
    if (Array.isArray(rooms)) {
      return rooms.map((room) => Number(room));
    }
    return [Number(rooms)];
  }
  return [];
};
const setInitialSquare = (squareMin: QueryT, squareMax: QueryT) => {
  if (squareMin && squareMax) {
    return [Number(squareMin), Number(squareMax)];
  }
  return [];
};

const setInitialProjects = (projectsQuery: QueryT, projects: ProjectI[]) => {
  const queryIds = Array.isArray(projectsQuery)
    ? projectsQuery.map(Number)
    : [Number(projectsQuery)];

  return projects?.filter((project) => queryIds.includes(project.id));
};

export const useFilters = (filters: FiltersResponseI | undefined) => {
  const {
    rooms,
    projects,
    priceMin,
    priceMax,
    squareMin,
    squareMax,
  } = useQuery();

  const { removeQuery } = useRemoveQuery();

  const [currentRooms, setCurrentRooms] = useState<RoomT[]>(() => setInitialRoom(rooms));
  const [currentProjects, setCurrentProjects] = useState<ProjectI[]>([]);

  useEffect(() => {
    if (!currentProjects.length) {
      setCurrentProjects(setInitialProjects(projects, filters ? filters.projects : []));
    }
  }, [filters]);

  const [priceValue, setPriceValue] = useState<number[]>(() => setInitialPrice(priceMin, priceMax));
  const [squareValue, setSquareValue] = useState<number[]>(
    () => setInitialSquare(squareMin, squareMax),
  );

  const clearFilters = () => {
    removeQuery();
    setCurrentRooms([]);
    setCurrentProjects([]);
    setPriceValue([filters?.price.min || 0, filters?.price.max || 0]);
    setSquareValue([filters?.square.min || 0, filters?.square.max || 0]);
  };

  return {
    values: {
      priceValue,
      currentProjects,
      currentRooms,
      squareValue,
    },
    setPriceValue,
    clearFilters,
    setSquareValue,
    setCurrentProjects,
    setCurrentRooms,
  };
};
