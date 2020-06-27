import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    }
  };
}

function addTask() {
  return {
    type: 'addTask',
 };
}

function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: {
      id
    },
  };
}

export default function App() {
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
