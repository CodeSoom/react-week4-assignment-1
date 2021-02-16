import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, tasks: 'TDD 졸잼...' },
      { id: 2, tasks: 'TDD 진짜 재밌다...' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
});
