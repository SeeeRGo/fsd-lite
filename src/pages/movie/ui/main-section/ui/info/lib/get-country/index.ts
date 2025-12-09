import type { Name } from 'shared/parts/api/types';

export function getCountry(countries: Name[]): string {
  return countries[countries.length - 1]?.name ?? '';
}
