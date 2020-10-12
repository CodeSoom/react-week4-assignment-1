import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    {
      id: 1,
      title: '아무것도 하지않기1',
    },
    {
      id: 2,
      title: '아무것도 하지않기2',
    },
  ];

  useSelector.mockImplementation((selector) => selector({ tasks }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
});
