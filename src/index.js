import ReactDOM from 'react-dom';

import Game from 'features/Game';

import 'normalize.css';
import './styles.scss';

/* eslint-disable react/jsx-filename-extension */
const App = () => <Game />;

/* eslint-disable no-undef */
ReactDOM.render(<App />, document.querySelector('#root'));
