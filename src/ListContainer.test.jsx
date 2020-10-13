import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import { deleteTask } from './actions';

jest.mock('react-redux');

test('ListContainer', () => {
  const tasks = [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ];

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getAllByText } = render((
    <ListContainer />
  ));

  tasks.forEach((task) => {
    expect(getByText(task.title)).not.toBeNull();
  });

  const deleteButtons = getAllByText(/완료/);
  deleteButtons.forEach((deleteButton, index) => {
    fireEvent.click(deleteButton);

    expect(dispatch).toBeCalledWith(deleteTask(tasks[index].id));
  });
});
