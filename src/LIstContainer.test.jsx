import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();

  fireEvent.click(getByText(/완료/));

  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 1,
    },
  });
});
