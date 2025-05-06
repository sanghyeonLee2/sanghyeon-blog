import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { useErrorStore } from '@/stores/useErrorStore';
import errorHandler from '../errors/errorHandler';
import { isCritical } from '@/utils/typeGuards';

export const customQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (isCritical(error)) {
        useErrorStore.getState().setError(error);
        return;
      }
      return errorHandler(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      return errorHandler(error);
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
      select: (res: any) => res.data,
    },
  },
});

export default customQueryClient;
