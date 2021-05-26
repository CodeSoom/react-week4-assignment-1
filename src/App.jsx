import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  addTask,
  updateTaskTitle,
} from './actions';

export default function App() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  );
}
