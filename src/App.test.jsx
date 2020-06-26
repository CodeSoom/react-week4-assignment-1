import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import { useSelector } from "react-redux";

jest.mock('react-redux');
test('App', () => {

  useSelector.mockImplementation((selector) => selector({
    newId: 1,
    tasks: [
      {
        id: 1,
        title: "너의 첫번째 임무다! #1"
      }, {
        id: 2,
        title: "너의 첫번째 임무다! #2"
      }
    ]
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

});
