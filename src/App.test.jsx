import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from '../__mocks__/react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/할 일이 없어요/)).not.toBeNull();
});
