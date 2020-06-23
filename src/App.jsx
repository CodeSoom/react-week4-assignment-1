import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Page from './Page';

const initState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function changeTitle(state, taskTitle) {
  return {
    ...state,
    taskTitle,
  };
}

export default function App() {

  const { taskTitle, tasks } = useSelector((state) => ({ 
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChangeTitle(event) {
    setState(changeTitle(state, event.target.value));
  }

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
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
