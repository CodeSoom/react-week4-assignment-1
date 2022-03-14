import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '운동가기',
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  render(
    <App />,
  );
});
