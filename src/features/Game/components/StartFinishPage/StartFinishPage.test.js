import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import StartFinishPage from './index';

import '@testing-library/jest-dom';

describe('StartFinishPage component', () => {
  const setUp = (extraProps) => {
    const props = {
      buttonText: 'Start',
      infoJSX: (<div data-testid="title">Title</div>),
      onClick: jest.fn(),
      ...extraProps,
    };

    const { getByTestId, getAllByTestId } = render(
      <StartFinishPage
        buttonText={props.buttonText}
        infoJSX={props.infoJSX}
        onClick={props.onClick}
      />,
    );
    return { getByTestId, getAllByTestId, props };
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StartFinishPage />, div);
  });

  it('renders button text', () => {
    const buttonText = 'Try again';
    const { getByTestId } = setUp({ buttonText });
    expect(getByTestId('start-finish-btn')).toHaveTextContent(buttonText);
  });

  it('fires an event handler on click', () => {
    const { getByTestId, props } = setUp();
    const button = getByTestId('start-finish-btn');
    expect(props.onClick.mock.calls.length).toBe(0);
    fireEvent.click(button);
    expect(props.onClick.mock.calls.length).toBe(1);
  });
  it('renders jsx content', () => {
    const { getByTestId } = setUp();
    expect(getByTestId('title')).toHaveTextContent('Title');
  });
});
