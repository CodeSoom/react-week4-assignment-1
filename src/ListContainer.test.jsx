import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import { deleteTask } from './actions';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  useDispatch.mockImplementation(() => dispatch);
});

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  tasks.forEach(({ title }) => {
    expect(getByText(title)).not.toBeNull();
  });

  const deleteButtons = getAllByText(/완료/);
  deleteButtons.forEach((deleteButton, index) => {
    fireEvent.click(deleteButton);

    expect(dispatch).toBeCalledWith(deleteTask(tasks[index].id));
  });
});
