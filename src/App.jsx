import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

function changeTitle(taskTitle) {
  return {
    type: 'changeTitle',
    payload: {
      taskTitle,
    },
  };
}

function addTask() {
  return {
    type: 'addTask',
  };
}

function deleteTask(id) {
  return {
    type: 'changeTitle',
    payload: {
      id,
    },
  };
}

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  const { taskTitle, tasks } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(state, id));
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
