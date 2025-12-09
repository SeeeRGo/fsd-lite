import type { Profession } from 'shared/parts/api/types';

export function getProfessions(professions: Profession[]) {
  return professions.map((item) => item.value).join(', ');
}
