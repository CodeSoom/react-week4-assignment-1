import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'task-1' },
      { id: 2, title: 'task-2' },
    ],
  }));
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/task-1/)).not.toBeNull();
  expect(getByText(/task-2/)).not.toBeNull();

  expect(getByText(/추가/)).not.toBeNull();
});
