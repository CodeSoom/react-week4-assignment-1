import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import List from './List';
import { deleteTask } from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((select) => ({
    tasks: select.tasks,
  }));

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
