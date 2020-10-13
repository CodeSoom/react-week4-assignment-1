import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getState } from './selectors';
import actions from './actions';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector(getState);

  function handleChangeTitle(event) {
    dispatch(actions.changeTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(actions.addTask());
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
