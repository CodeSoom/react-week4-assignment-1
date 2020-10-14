import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 101, title: 'TASK-01' },
      { id: 102, title: 'TASK-02' },
    ],
  }));

  const { getByText, getByLabelText } = render((<App />));

  expect(getByText(/TASK-01/)).not.toBeNull();
  expect(getByText(/추가/)).not.toBeNull();
  expect(getByLabelText(/할 일/)).not.toBeNull();
});
