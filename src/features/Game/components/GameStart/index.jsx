import Button from 'common/Button';

import Super from 'images/super.svg';

import './styles.scss';

const GameStart = () => {
  return (
    <div className="game-start">
      <div className="game-start--wrapper">
        <div className="game-start--left">
          <Super className="game-start--left--icon" />
        </div>
        <div className="game-start--right">
          <div className="game-start--right--title">
            Who wants to be <br /> a millionaire?
          </div>
          <Button>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default GameStart;
