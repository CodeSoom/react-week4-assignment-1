import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  const { getAllByText, getByText } = render(<ListContainer />);

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  expect(getAllByText(/완료/)).toHaveLength(2);

  fireEvent.click(getAllByText(/완료/)[0]);
  expect(dispatch).toBeCalledWith({
    type: 'DELETE_TASK',
    payload: {
      id: 1,
    },
  });
});
