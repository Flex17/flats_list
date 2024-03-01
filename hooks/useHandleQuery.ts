import { useRouter } from 'next/router';

export const useHandleQuery = () => {
  const router = useRouter();

  const {
    query,
    pathname,
  } = router;

  const onRouterPush = (newQuery: {}) => {
    const combinedQuery = {
      ...query,
      ...newQuery,
    };

    router.push({
      pathname,
      query: combinedQuery,
    });
  };

  return {
    onRouterPush,
  };
};
