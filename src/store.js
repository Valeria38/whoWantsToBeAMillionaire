import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import gameReducer from 'features/Game/reducers';

const rootReducer = combineReducers({
  gameReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
