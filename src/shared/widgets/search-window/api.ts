import { createQuery } from '@farfetched/core';
import { createCommonRequestFx } from 'shared/parts/api/requests';
import type { SearchMovies, SearchParams } from 'shared/parts/api/types';

export const searchByNameQuery = createQuery({
  effect: createCommonRequestFx<SearchParams, SearchMovies>(
    ({ query, page }) => ({
      url: '/v1.2/movie/search',
      params: {
        query,
        page,
        limit: 30,
      },
    })
  ),
});
