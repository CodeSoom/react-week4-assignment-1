import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getAllByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  getAllByText(/아무 것도 하지 않기/).forEach((task) => {
    expect(task).not.toBeNull();
  });
});
