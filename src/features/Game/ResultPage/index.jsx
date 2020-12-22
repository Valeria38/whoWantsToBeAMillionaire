import { useSelector, useDispatch } from 'react-redux';

import StartFinishPage from 'features/Game/components/StartFinishPage';

import { getIsResultShown, getScore } from 'features/Game/selectors';

import { showStartPage, setCurrentStep, addScore } from 'features/Game/actions';

import modifyScore from 'helpers/modifyScore';

import './styles.scss';

const ResultPage = () => {
  const dispatch = useDispatch();
  const isShown = useSelector(getIsResultShown);
  const score = useSelector(getScore);

  const headerJSX = (
    <div>
      <div className="game--subtitle">Total score:</div>
      <div className="game-start--right--title">
        {modifyScore(score)}
        earned
      </div>
    </div>
  );

  const handleClick = () => {
    dispatch(setCurrentStep(1));
    dispatch(addScore(0));
    dispatch(showStartPage());
  };

  return isShown ? (
    <StartFinishPage
      infoJSX={headerJSX}
      onClick={handleClick}
      buttonText="Try again"
    />
  ) : null;
};

export default ResultPage;
