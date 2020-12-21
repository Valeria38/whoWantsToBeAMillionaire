import classNames from 'classnames';

import { fieldSizes } from 'constants/fieldSizes';

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
          className={classNames('field-item--content', {
            isDisabled,
            isActive,
          })}
        >
          {typeof modifyLabel === 'function' ? modifyLabel(children) : children}
        </div>
      </div>
    </div>
  );
};

export default Field;
