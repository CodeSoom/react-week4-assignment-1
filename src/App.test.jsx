import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText, getByPlaceholderText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByPlaceholderText(/할 일을 입력해 주세요/)).not.toBeNull();
});
