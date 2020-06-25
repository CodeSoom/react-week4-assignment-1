import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByLabelText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  const value = '새로운 할 일';

  fireEvent.change(getByLabelText(/할 일/), { target: { value } });
  fireEvent.click(getByText(/추가/));

  expect(getByText(value)).not.toBeNull();

  expect(getByText(/완료/)).not.toBeNull();
  fireEvent.click(getByText(/완료/));
});
