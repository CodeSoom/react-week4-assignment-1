import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }
}

export default function App() {
  // store에서 그려오기 위한 것
  const { taskTitle, tasks } = useSelector((state) => ({
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
