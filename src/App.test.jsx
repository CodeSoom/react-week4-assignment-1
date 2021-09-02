import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무것도 하지 않기 #1' },
      { id: 2, title: '아무것도 하지 않기 #2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
  expect(getByText(/아무것도 하지 않기 #2/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));
  expect(dispatch).toBeCalled();
});
