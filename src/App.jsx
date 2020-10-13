import React, { useState } from 'react';

import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './actions';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  function handleChangeTitle(event) {
    setState(reducer(state, updateTaskTitle(event.target.value)));
  }

  function handleClickAddTask() {
    setState(reducer(state, addTask()));
  }

  function handleClickDeleteTask(id) {
    setState(reducer(state, deleteTask(id)));
  }

  return (
    <Page
      taskTitle={state?.taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={state?.tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
