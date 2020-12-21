import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameReducer } from 'features/Game/reducers';

const rootReducer = combineReducers({
  gameReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
