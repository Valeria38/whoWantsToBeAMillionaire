import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import dataPropType from 'customPropTypes/dataPropType';

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
      dispatch(showResultPage());
    }
  };

  return <Component {...currentData} onClick={handleClick} />;
};

Stepper.propTypes = {
  data: dataPropType.isRequired,
  Component: PropTypes.func.isRequired,
};

export default Stepper;
