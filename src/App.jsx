import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';
import { addTask, updateTaskTitle } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

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
