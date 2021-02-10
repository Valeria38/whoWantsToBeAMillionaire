import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import fieldSizes from 'Constants/fieldSizes';

import modifyScore from 'helpers/modifyScore';

import Field from './index';

import '@testing-library/jest-dom';

describe('StartFinishPage component', () => {
  const setUp = (extraProps) => {
    const props = {
      id: 1,
      children: 1000,
      isDisabled: false,
      isActive: false,
      size: fieldSizes.sm,
      onClick: jest.fn(),
      isInteractive: false,
      isCorrect: false,
      isWrong: false,
      ...extraProps,
    };

    const { getByTestId, getAllByTestId } = render(
      <Field
        {...props}
      />,
    );
    return { getByTestId, getAllByTestId, props };
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field id={1}>$8,000</Field>, div);
  });

  it('renders field text', () => {
    const { getByTestId, props } = setUp();
    expect(getByTestId('field-text')).toHaveTextContent(props.children);
  });

  it('renders modified field text', () => {
    const { getByTestId, props } = setUp({ modifyLabel: modifyScore });
    const modifiedLabel = modifyScore(props.children);
    expect(getByTestId('field-text')).toHaveTextContent(modifiedLabel);
  });

  it('should have isDisabled className when disabled', () => {
    const { getByTestId } = setUp({ isDisabled: true });
    expect(getByTestId('field-text-wrapper')).toHaveClass('isDisabled');
  });

  it('should have isActive className when active', () => {
    const { getByTestId } = setUp({ isActive: true });
    expect(getByTestId('field-text-wrapper')).toHaveClass('isActive');
  });

  it('should have isInteractive className when disabled', () => {
    const { getByTestId } = setUp({ isInteractive: true });
    expect(getByTestId('field-icon')).toHaveClass('isInteractive');
  });

  it('should have isCorrect className when isCorrect prop passed', () => {
    const { getByTestId } = setUp({ isCorrect: true });
    expect(getByTestId('field-icon')).toHaveClass('isCorrect');
  });

  it('should have isWrong className when isWrong prop passed', () => {
    const { getByTestId } = setUp({ isWrong: true });
    expect(getByTestId('field-icon')).toHaveClass('isWrong');
  });
});
