import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from 'features/Game';

import store from 'store';

import 'normalize.css';
import './styles.scss';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

/* eslint-disable no-undef */
ReactDOM.render(<App />, document.querySelector('#root'));
