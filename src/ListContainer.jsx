import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import List from './List';

import { deleteTask } from './action';

function selector(state) {
  return {
    tasks: state.tasks,
  };
}

export default function ListContainer() {
  const { tasks } = useSelector(selector);

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return <List tasks={tasks} onClickDelete={handleClickDeleteTask} />;
}
