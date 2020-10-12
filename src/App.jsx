import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from './selectors';
import actions from './actions';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });
  const dispatch = useDispatch();
  const { taskTitle } = useSelector(selectors.getTaskTitle);

  const { newId, tasks } = state;

  function handleChangeTitle(event) {
    dispatch(actions.changeTitle(event.target.value));
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
