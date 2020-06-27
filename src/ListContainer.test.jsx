import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  const tasks = [
    { id: 0, title: 'test1' },
    { id: 1, title: 'test2' },
  ];
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getAllByText } = render((
    <ListContainer />
  ));

  expect(getAllByText(/완료/)).not.toBeNull();

  fireEvent.click(getAllByText(/완료/)[0]);
  expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 0 } });
  // expect(getAllByText(/완료/).length).toBe(2);
});
