import { createAction } from 'redux-actions';

export const showQuestionsPage = createAction(
  'SHOW_QUESTIONS',
  (isShown) => isShown
);

export const showResultPage = createAction('SHOW_RESULT', (isShown) => isShown);

export const showStartPage = createAction('SHOW_START', (isShown) => isShown);

export const setCurrentStep = createAction('SET_CURRENT_STEP', (step) => step);

export const addScore = createAction('ADD_SCORE', (score) => score);
