import { useRouter } from 'next/router';

interface QueryParamsI {
  roomsQuery: string;
  projectsQuery: string;
  priceMinQuery: string;
  priceMaxQuery: string;
  squareMinQuery: string;
  squareMaxQuery: string;
}

export const queryParams: QueryParamsI = {
  roomsQuery: 'f[rooms][]',
  projectsQuery: 'f[projects][]',
  priceMinQuery: 'f[price][min]',
  priceMaxQuery: 'f[price][max]',
  squareMinQuery: 'f[square][min]',
  squareMaxQuery: 'f[square][max]',
};

export const useRemoveQuery = () => {
  const router = useRouter();
  const removeQuery = () => {
    const {
      pathname,
      query,
    } = router;

    Object.keys(queryParams)
      .forEach((key) => {
        const queryKey = queryParams[key as keyof QueryParamsI];
        if (router.query[queryKey]) {
          delete router.query[queryKey];
        }
      });

    router.push({
      pathname,
      query,
    }, undefined, { shallow: true });
  };
  return { removeQuery };
};

export const useQuery = () => {
  const router = useRouter();

  const {
    projectsQuery,
    priceMaxQuery,
    squareMaxQuery,
    squareMinQuery,
    priceMinQuery,
    roomsQuery,
  } = queryParams;

  const {
    [roomsQuery]: rooms,
    [projectsQuery]: projects,
    [priceMinQuery]: priceMin,
    [priceMaxQuery]: priceMax,
    [squareMinQuery]: squareMin,
    [squareMaxQuery]: squareMax,
  } = router.query;

  return {
    rooms,
    projects,
    priceMin,
    priceMax,
    squareMin,
    squareMax,
  };
};
