import React, { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const updateTaskTitle = (state, taskTitle) => ({
  ...state,
  taskTitle,
});

const addTask = (state) => ({
  ...state,
  newId: state.newId + 1,
  taskTitle: '',
  tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
});

const deleteTask = (state, id) => ({
  ...state,
  tasks: state.tasks.filter((task) => task.id !== id),
});

export default function App() {
  const [state, setState] = useState(initialState);

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
      taskTitle={state.taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={state.tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
