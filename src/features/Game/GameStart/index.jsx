import { useSelector, useDispatch } from 'react-redux';

import StartFinishPage from 'features/Game/components/StartFinishPage';

import { getIsGameStartShown } from 'features/Game/selectors';
import { showQuestionsPage } from 'features/Game/actions';

import './styles.scss';

const GameStart = () => {
  const isShown = useSelector(getIsGameStartShown);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showQuestionsPage());
  };

  const headerJSX = (
    <div className="game-start--right--title">
      Who wants to be <br /> a millionaire?
    </div>
  );

  return isShown ? (
    <StartFinishPage
      infoJSX={headerJSX}
      onClick={handleClick}
      buttonText="Start"
    />
  ) : null;
};

export default GameStart;
