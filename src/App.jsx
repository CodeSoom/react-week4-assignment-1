import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';

import {
  updateTask, addTask, deleteTask,
} from './actions';

function selector(state) {
  return {
    newTask: state.newTask,
    tasks: state.tasks,
  };
}

export default function App() {
  const { newTask, tasks } = useSelector(selector);

  const dispatch = useDispatch();

  function onChangeTask(event) {
    dispatch(updateTask(event.target.value));
  }

  function onClickAddTask() {
    dispatch(addTask());
  }

  function onClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      tasks={tasks}
      newTask={newTask}
      onChangeTask={onChangeTask}
      onClickAddTask={onClickAddTask}
      onClickDeleteTask={onClickDeleteTask}
    />
  );
}
