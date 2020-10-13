import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const taskTitle = '';
  const tasks = [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ];

  useSelector.mockImplementation((selector) => selector({
    taskTitle,
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  tasks.forEach((task) => {
    expect(getByText(task.title)).not.toBeNull();
  });
});
