import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import data from 'features/Game/Questions/data.json';

import store from 'store';

import MobileNavMenu from './index';

import '@testing-library/jest-dom';

describe('MobileNavMenu component', () => {
  const setUp = () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}><MobileNavMenu data={data} /></Provider>,
    );
    return { getByTestId, getAllByTestId };
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MobileNavMenu data={data} />, div);
  });

  it('renders burger', () => {
    const { getByTestId } = setUp();
    expect(getByTestId('burger')).toBeDefined();
  });

  it('opens mobile score list on click', () => {
    const { getByTestId } = setUp();
    const burger = getByTestId('burger');
    fireEvent.click(burger);
    expect(getByTestId('mobile-score-list')).toBeDefined();
  });
});
