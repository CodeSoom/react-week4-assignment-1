import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './actions';

import List from './List';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return <List tasks={tasks} onClickDeleteTask={handleClickDeleteTask} />;
}
