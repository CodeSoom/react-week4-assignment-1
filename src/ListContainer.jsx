import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
