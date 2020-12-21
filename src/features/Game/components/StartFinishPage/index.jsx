import Button from 'common/Button';

import Super from 'images/super.svg';

import './styles.scss';

const StartFinishPage = ({ infoJSX, onClick, buttonText }) => (
  <div className="game-start">
    <div className="game-start--wrapper">
      <div className="game-start--left">
        <Super className="game-start--left--icon" />
      </div>
      <div className="game-start--right">
        {infoJSX}
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  </div>
);

export default StartFinishPage;
