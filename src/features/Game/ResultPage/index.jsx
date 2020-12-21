import { useSelector } from 'react-redux';

import { getIsResultShown, getScore } from 'features/Game/selectors';

const ResultPage = () => {
  const isShown = useSelector(getIsResultShown);
  const score = useSelector(getScore);

  return isShown ? <div>{score}</div> : null;
};

export default ResultPage;
