import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무것도 하지 않기 #1' },
      { id: 2, title: '아무것도 하지 않기 #2' },
    ],
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  const buttons = getAllByText(/완료/);

  fireEvent.click(buttons[0]);

  expect(dispatch).toBeCalled();
  expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
});
