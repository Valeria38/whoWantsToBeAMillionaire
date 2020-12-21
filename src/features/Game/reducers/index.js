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

const gameReducer = handleActions(
  {
    [showQuestionsPage]: (state) => ({
      ...state,
      isGameStartShown: !state.isGameStartShown,
      isQuestionsShown: !state.isQuestionsShown,
    }),
    [showResultPage]: (state) => ({
      ...state,
      isQuestionsShown: !state.isQuestionsShown,
      isGameResultShown: !state.isGameResultShown,
    }),
    [showStartPage]: (state) => ({
      ...state,
      isGameResultShown: !state.isGameResultShown,
      isGameStartShown: !state.isGameStartShown,
    }),
    [setCurrentStep]: (state, { payload }) => ({
      ...state,
      currentId: payload,
    }),
    [addScore]: (state, { payload }) => ({
      ...state,
      score: payload,
    }),
  },
  initialState,
);

export default gameReducer;
