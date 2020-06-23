import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle, addTask, deleteTask } from './actions';

import Page from './Page';

export default function App() {
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector((state) => state);

  function handleChangeTitle(event) {
    dispatch(updateTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

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
