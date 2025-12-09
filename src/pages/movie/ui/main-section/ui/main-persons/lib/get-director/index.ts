import type { PersonInMovie } from 'shared/parts/api/types';

export function getDirector(persons: PersonInMovie[]) {
  const director = persons?.filter(
    (person) => person.enProfession === 'director'
  )[0];

  return [director];
}
