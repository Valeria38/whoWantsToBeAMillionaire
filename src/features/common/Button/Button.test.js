import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import Button from './index';

import '@testing-library/jest-dom';

describe('Button component', () => {
  const setUp = (extraProps) => {
    const props = {
      children: 'Start',
      onClick: jest.fn(),
      dataTestId: 'button',
      ...extraProps,
    };

    const { getByTestId, getAllByTestId } = render(
      <Button
        onClick={props.onClick}
        dataTestId={props.dataTestId}
      >
        {props.children}
      </Button>,
    );
    return { getByTestId, getAllByTestId, props };
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('renders button text', () => {
    const { getByTestId, props } = setUp();
    expect(getByTestId('button')).toHaveTextContent(props.children);
  });

  it('fires an event handler on click', () => {
    const { getByTestId, props } = setUp();
    const button = getByTestId('button');
    expect(props.onClick.mock.calls.length).toBe(0);
    fireEvent.click(button);
    expect(props.onClick.mock.calls.length).toBe(1);
  });
  it('passes dataTestId prop', () => {
    const { getByTestId, props } = setUp();
    expect(getByTestId(props.dataTestId)).toBeDefined();
  });
});
