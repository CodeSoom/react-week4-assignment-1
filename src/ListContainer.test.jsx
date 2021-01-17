import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import ListContainer from './ListContainer';

test('ListContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 101, title: 'TASK-01' },
      { id: 102, title: 'TASK-02' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  expect(getByText(/TASK-01/)).not.toBeNull();
  expect(getByText(/TASK-02/)).not.toBeNull();

  fireEvent.click(getAllByText(/완료/)[0]);

  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 101,
    },
  });
});
