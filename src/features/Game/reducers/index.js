import { handleActions } from 'redux-actions';

import {
  showQuestionsPage,
  showResultPage,
  showStartPage,
  setCurrentStep,
  addScore,
} from 'features/Game/actions';

const initialState = {
  isGameStartShown: true,
  isQuestionsShown: false,
  isGameResultShown: false,
  isAnswerCorrect: false,
  currentId: 1,
  isGameLost: false,
  score: 0,
};

export const gameReducer = handleActions(
  {
    [showQuestionsPage]: (state) => {
      return {
        ...state,
        isGameStartShown: !state.isGameStartShown,
        isQuestionsShown: !state.isQuestionsShown,
      };
    },
    [showResultPage]: (state) => {
      return {
        ...state,
        isQuestionsShown: !state.isQuestionsShown,
        isGameResultShown: !state.isGameResultShown,
      };
    },
    [showStartPage]: (state) => {
      return {
        ...state,
        isGameResultShown: !state.isGameResultShown,
        isGameStartShown: !state.isGameStartShown,
      };
    },
    [setCurrentStep]: (state, { payload }) => {
      return {
        ...state,
        currentId: payload,
      };
    },
    [addScore]: (state, { payload }) => {
      return {
        ...state,
        score: payload,
      };
    },
  },
  initialState
);
