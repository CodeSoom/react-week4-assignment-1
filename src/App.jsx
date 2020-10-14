import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '아무 것도 하지 않기 #1'},
    { id: 2, title: '아무 것도 하지 않기 #2'},
  ],
}

function updateTaskTitle(state, taskTitle) {
  return {
    ...state,
    taskTitle,
  };
}

function addTask(state) {
  const { newId, taskTitle, tasks } = state;

  return {
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
}

function deleteTask(state, id) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function App() {
  const dispatch = useDispatch();

  const {taskTitle, tasks} = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(state, event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask(state));
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
