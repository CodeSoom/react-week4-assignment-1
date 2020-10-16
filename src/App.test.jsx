import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: 'Task-1' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
});
