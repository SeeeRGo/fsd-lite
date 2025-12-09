import { createQuery } from '@farfetched/core';
import { createCommonRequestFx } from 'shared/parts/api/requests';
import type { Person } from 'shared/parts/api/types';

export const personByIdQuery = createQuery({
  effect: createCommonRequestFx<string, Person>((id) => ({
    url: `/v1/person/${id}`,
  })),
});
