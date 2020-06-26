import React, { useState } from 'react';

import Page from './Page';

const initialState = {
  taskId: 0,
  taskTitle: '',
  tasks: [],
};

function updateTaskTitle(previousState, taskTitle) {
  return {
    ...previousState,
    taskTitle,
  };
}

function addTask(previousState) {
  const { tasks, taskId, taskTitle } = previousState;
  return {
    ...previousState,
    taskId: taskId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: taskId, title: taskTitle }],
  };
}

function deleteTask(previousState, id) {
  const { tasks } = previousState;
  return {
    ...previousState,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState(updateTaskTitle(state, event.target.value));
  }

  function handleClickAddTask() {
    setState(addTask(state));
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(state, id));
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
