import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Page from './Page';

export default function App() {
  const { newId, taskTitle, tasks } = useSelector((state) => state);

  function handleChangeTitle(event) {}

  function handleClickAddTask() {}

  function handleClickDeleteTask(id) {}

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
