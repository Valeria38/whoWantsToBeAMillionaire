import GameStart from './GameStart';
import Questions from './Questions';
import ResultPage from './ResultPage';

import './styles.scss';

const Game = () => (
  <div className="game">
    <GameStart />
    <Questions />
    <ResultPage />
  </div>
);

export default Game;
