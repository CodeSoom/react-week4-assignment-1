import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: 'task-1' },
    ],
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
