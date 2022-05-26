import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import { tasks } from '../__mocks__/tasks';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).toBeInTheDocument();
  expect(getByText(/아무 것도 하지 않기 #1/)).toBeInTheDocument();
  expect(getByText(/아무 것도 하지 않기 #2/)).toBeInTheDocument();
});
