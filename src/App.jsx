import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addTask, deleteTask, updateTaskTitle } from './actions';

import Page from './Page';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  const { taskTitle, tasks } = useSelector(selector);

  const dispath = useDispatch();

  function handleChangeTitle(event) {
    dispath(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispath(addTask());
  }

  function handleClickDeleteTask(id) {
    dispath(deleteTask(id));
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
