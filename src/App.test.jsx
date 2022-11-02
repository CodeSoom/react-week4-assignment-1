import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
});
