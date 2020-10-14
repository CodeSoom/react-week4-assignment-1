import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1'},
      { id: 2, title: '아무 것도 하지 않기 #2'},
    ],
  }));

  expect(getByText(/추가/)).not.toBeNull();
});
