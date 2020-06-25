import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { deleteTask } from './actions';

export default function ListContainer() {
  const { tasks } = useSelector(() => ({
    tasks: [
      { id: 1, title: '과제하기' },
      { id: 2, title: '과제하지말기' },
    ],
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
