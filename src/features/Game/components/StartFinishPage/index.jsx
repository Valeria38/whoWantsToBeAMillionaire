import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from 'common/Button';

import Super from 'images/super.svg';

import './styles.scss';

const StartFinishPage = ({ infoJSX, onClick, buttonText, withBg }) => (
  <div className={classNames("game-start", { withBg })} data-testid="game-start">
    <div className="game-start--wrapper">
      <div className="game-start--left">
        <Super className="game-start--left--icon" />
      </div>
      <div className="game-start--right">
        {infoJSX}
        <Button dataTestId="start-finish-btn" onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  </div>
);

StartFinishPage.propTypes = {
  infoJSX: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  withBg: PropTypes.bool,
};

StartFinishPage.defaultProps = {
  withBg: true,
};

export default StartFinishPage;
