import { createSelector } from 'reselect';

const gameSelector = (state) => state.gameReducer;

export const getIsGameStartShown = createSelector(
  gameSelector,
  (state) => state.isGameStartShown,
);

export const getIsQuestionsShown = createSelector(
  gameSelector,
  (state) => state.isQuestionsShown,
);

export const getIsResultShown = createSelector(
  gameSelector,
  (state) => state.isGameResultShown,
);

export const getCurrentId = createSelector(
  gameSelector,
  (state) => state.currentId,
);

export const getScore = createSelector(gameSelector, (state) => state.score);
