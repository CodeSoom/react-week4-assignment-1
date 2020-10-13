import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

test('Page', () => {
  const taskTitle = '';
  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  jest.mock('react-redux');

  useSelector.mockImplementation((selector) => selector({
    taskTitle,
    tasks,
  }));

  const { getByText } = render((
    <Page />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();
});
