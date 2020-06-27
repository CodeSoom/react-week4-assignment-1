import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    { id: 0, title: 'Task-1' },
    { id: 1, title: 'Task-2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();
});
