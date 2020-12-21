import { useSelector, useDispatch } from 'react-redux';

import { getCurrentId } from 'features/Game/selectors';
import {
  setCurrentStep,
  showResultPage,
  addScore,
} from 'features/Game/actions';

const Stepper = ({ data, Component }) => {
  const dispatch = useDispatch();
  const currentId = useSelector(getCurrentId);

  const currentData = data.find(({ id }) => id === currentId);

  const handleClick = (answer) => {
    const isAnswerCorrect = answer === currentData.correctAnswer;

    if (isAnswerCorrect) {
      currentId === data.length
        ? dispatch(showResultPage())
        : dispatch(setCurrentStep(currentId + 1));
      dispatch(addScore(currentData.price));
    } else {
      console.log('else');
      dispatch(showResultPage());
    }
  };

  return <Component {...currentData} onClick={handleClick} />;
};

export default Stepper;
