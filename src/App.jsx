import React, { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function changeTaskTitle(state, value) {
  return {
    ...state,
    taskTitle: value,
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
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { newId, taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState(changeTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    setState(addTask());
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(id));
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
