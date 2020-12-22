import PropTypes from 'prop-types';

import answersPropType from 'customPropTypes/answersPropType';

const dataPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answers: answersPropType.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}));

export default dataPropType;
