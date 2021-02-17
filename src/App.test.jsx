import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks: [],
  }));

  function renderApp() {
    return render((
      <App />
    ));
  }

  it('shows "추가" text', () => {
    const { getByText } = renderApp();

    expect(getByText(/추가/)).not.toBeNull();
  });
});
