import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    // { id: 1, title: '아무 것도 하지 않기 #1' },
    // { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getByLabelText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();



  // fireEvent.click(getByText(/완료/));

  // expect(getByText(/할 일이 없어요!/)).not.toBeNull();
});
