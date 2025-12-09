import { atom } from 'shared/parts/factory';
import { createToggler } from 'shared/parts/lib/toggler';

export const headerModel = atom(() => {
  const toggler = createToggler();

  return {
    toggler,
  };
});
