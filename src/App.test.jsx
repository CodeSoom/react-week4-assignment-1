import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const testTasks = [
    { id: 1, title: 'Distribute new version' },
    { id: 2, title: 'Fix errors' },
  ];

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: testTasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).toBeInTheDocument();
  expect(getByText(testTasks[0].title)).toBeInTheDocument();
});
