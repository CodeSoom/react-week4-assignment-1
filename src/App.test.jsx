import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Task-1/)).toBeInTheDocument();
  expect(getByText(/Task-2/)).toBeInTheDocument();
  expect(getByText(/추가/)).toBeInTheDocument();
});
