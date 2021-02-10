import PropTypes from 'prop-types';

const answersPropType = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}));

export default answersPropType;
