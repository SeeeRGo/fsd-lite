import type { PersonInMovie } from 'shared/parts/api/types';

export function getActors(items: PersonInMovie[]) {
  const persons = items.slice(0, 3);

  return persons;
}
