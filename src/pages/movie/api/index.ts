import { createQuery } from '@farfetched/core';
import { createCommonRequestFx } from 'shared/parts/api/requests';
import type { Movie } from 'shared/parts/api/types';

export const movieQuery = createQuery({
  effect: createCommonRequestFx<string, Movie>((id) => ({
    url: `/v1.4/movie/${id}`,
  })),
});
