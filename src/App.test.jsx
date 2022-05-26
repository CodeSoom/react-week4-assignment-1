import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';
import { useDispatch } from '../__mocks__/react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '코드숨 과제하기1' },
      { id: 2, title: '코드숨 과제하기2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  expect(getByText(/코드숨 과제하기1/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(dispatch).toBeCalled();
});
