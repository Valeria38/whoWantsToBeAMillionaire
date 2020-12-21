import { useSelector, useDispatch } from 'react-redux';

import Button from 'common/Button';

import { getIsGameStartShown } from 'features/Game/selectors';
import { showQuestionsPage } from 'features/Game/actions';

import Super from 'images/super.svg';

import './styles.scss';

const GameStart = () => {
  const isShown = useSelector(getIsGameStartShown);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showQuestionsPage());
  };

  return isShown ? (
    <div className="game-start">
      <div className="game-start--wrapper">
        <div className="game-start--left">
          <Super className="game-start--left--icon" />
        </div>
        <div className="game-start--right">
          <div className="game-start--right--title">
            Who wants to be <br /> a millionaire?
          </div>
          <Button onClick={handleClick}>Start</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default GameStart;
