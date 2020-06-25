import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

function selector(state) {
  return {
    tasks: state.tasks,
  };
}

export default function ListContainer() {
  const { tasks } = useSelector(selector);

  function handleClickDeleteTask() {}

  return <List tasks={tasks} onClickDelete={handleClickDeleteTask} />;
}
