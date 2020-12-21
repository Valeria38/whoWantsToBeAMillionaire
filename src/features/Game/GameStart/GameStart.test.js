import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from 'store';

import GameStart from './index';

import '@testing-library/jest-dom';

describe('GameStart component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><GameStart /></Provider>, div);
  });

  it('shows StartFinishPage', () => {
    const { getByTestId } = render(<Provider store={store}><GameStart /></Provider>);
    expect(getByTestId('game-start')).toBeDefined();
  });
});
