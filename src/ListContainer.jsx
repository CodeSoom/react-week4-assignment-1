import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './action';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
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
