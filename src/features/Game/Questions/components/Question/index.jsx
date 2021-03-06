import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useBreakpoints from 'hooks/useBreakpoints';

import fieldSizes from 'Constants/fieldSizes';

import answersPropType from 'customPropTypes/answersPropType';

import Field from 'features/Game/Questions/components/Field';

import './styles.scss';

const Question = ({ question, answers, correctAnswer, onClick }) => {
  const { isSm, isMd } = useBreakpoints();

  const [clickedId, setClickedId] = useState(null);

  useEffect(() => {
    setClickedId(null);
  }, [answers]);

  const handleClick = (answer, id) => {
    setClickedId(id);
    typeof onClick === 'function' && setTimeout(() => onClick(answer), 700);
  };
  return (
    <div className="question--container">
      <div className="question--top">
        <p className="question--top--title">{question}</p>
      </div>
      <div className="question--answers">
        {answers?.map((item) => (
          <Field
            key={item.id}
            id={item.id}
            onClick={onClick}
            size={!isSm && !isMd ? fieldSizes.lg : fieldSizes.md}
            isInteractive
            onClick={handleClick}
            isCorrect={item.label === correctAnswer && item.id === clickedId}
            isWrong={item.label !== correctAnswer && item.id === clickedId}
          >
            {item.label}
          </Field>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: answersPropType.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Question.defaultProps = {
  onClick: undefined,
};

export default Question;
