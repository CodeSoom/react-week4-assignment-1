import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

export default function ListContainer() {
  const dispath = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    dispath(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
