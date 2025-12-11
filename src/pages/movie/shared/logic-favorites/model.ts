import { createEvent, createStore, sample } from 'effector';
import { and, not } from 'patronum';
import { authModel } from 'widgets/auth';
import { refreshQuery, sessionModel } from 'entities/session';
import { atom } from 'shared/parts/factory';
import { checkFavoriteQuery, toggleFavoriteQuery } from './api';
// This is an example of internal logic
// How to handle multiple models/apis and loic without ui units in the file structure? idk yet
// Maybe api should be handled  same as lib functions or maybe not
export const favoritesModel = atom(() => {
  const $isFavorite = createStore(false);

  const toggleFavorite = createEvent<{ id: number }>();

  sample({
    clock: toggleFavorite,
    source: $isFavorite,
    filter: sessionModel.$isLogged,
    fn: (isFavorite) => !isFavorite,
    target: $isFavorite,
  });

  sample({
    clock: toggleFavorite,
    filter: sessionModel.$isLogged,
    target: toggleFavoriteQuery.start,
  });

  sample({
    clock: checkFavoriteQuery.finished.success,
    fn: ({ result }) => result.status,
    target: $isFavorite,
  });

  sample({
    clock: toggleFavorite,
    filter: and(not(sessionModel.$isLogged), not(refreshQuery.$pending)),
    target: authModel.toggler.open,
  });

  return {
    toggleFavorite,
    $isFavorite,
  };
});
