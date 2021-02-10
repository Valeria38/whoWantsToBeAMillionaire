import classNames from 'classnames';
import PropTypes from 'prop-types';

import fieldSizes from 'Constants/fieldSizes';

import FieldSvg from 'images/field.svg';

import './styles.scss';

const Field = ({
  id,
  children,
  isDisabled,
  isActive,
  size = fieldSizes.sm,
  onClick,
  isInteractive,
  isCorrect,
  isWrong,
  modifyLabel,
}) => {
  const handleClick = () => {
    typeof onClick === 'function' && onClick(children, id);
  };

  return (
    <div
      data-testid="field"
      className={classNames('field-item', {
        isInteractive,
        isCorrect,
        isWrong,
      })}
      style={{ height: size.height }}
      onClick={handleClick}
    >
      <div className="field-item--wrapper">
        <FieldSvg
          data-testid="field-icon"
          className={classNames('field-item--icon', {
            isActive,
            isInteractive,
            isCorrect,
            isWrong,
          })}
          width={`${size.width}px`}
          height={`${size.height}px`}
        />
        <div
            data-testid="field-text-wrapper"
            className={classNames('field-item--content', {
            isDisabled,
            isActive,
          })}
        >
          <span data-testid="field-text">
            {typeof modifyLabel === 'function' ? modifyLabel(children) : children}
          </span>
        </div>
      </div>
    </div>
  );
};

Field.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func,
  isInteractive: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isWrong: PropTypes.bool,
  modifyLabel: PropTypes.func,
};

Field.defaultProps = {
  isDisabled: false,
  isActive: false,
  size: fieldSizes.sm,
  onClick: undefined,
  isInteractive: false,
  isCorrect: false,
  isWrong: false,
  modifyLabel: undefined,
};

export default Field;
