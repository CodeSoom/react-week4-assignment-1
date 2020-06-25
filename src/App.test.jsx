import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByLabelText } = render((
    <App />
  ));

  const TASK = '테스트';

  expect(getByText(/추가/)).not.toBeNull();

  fireEvent.change(getByLabelText(/할 일/), { target: { value: TASK } });
  fireEvent.click(getByText(/추가/));

  expect(getByText(TASK)).not.toBeNull();

  fireEvent.click(getByText(/완료/));

  expect(getByText(/할 일이 없어요!/)).not.toBeNull();
});
