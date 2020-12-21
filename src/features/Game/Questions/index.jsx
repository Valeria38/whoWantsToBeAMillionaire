import { useSelector } from 'react-redux';

import MobileNavMenu from 'features/Game/Questions/components/MobileNavMenu';
import Question from 'features/Game/Questions/components/Question';

import data from 'features/Game/Questions/data.json';

import ScoreList from 'features/Game/Questions/components/ScoreList';
import Stepper from 'features/Game/Questions/components/Stepper';

import { getIsQuestionsShown } from 'features/Game/selectors';

import './styles.scss';

const Questions = () => {
  const isShown = useSelector(getIsQuestionsShown);

  return isShown ? (
    <div className="questions">
      <Stepper data={data} Component={Question} />
      <div className="questions--right">
        <ScoreList />
      </div>
      <MobileNavMenu />
    </div>
  ) : null;
};

export default Questions;
