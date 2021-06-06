import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const state = {
    taskTitle: '',
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  };
  useSelector.mockImplementation((selector) => selector(state));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();
  expect(getByText(/추가/)).not.toBeNull();
});
