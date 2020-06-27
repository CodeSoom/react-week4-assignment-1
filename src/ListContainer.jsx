import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './action';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
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
