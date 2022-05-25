import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import { deleteTask } from './actions';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispath = useDispatch();

  function onClickDeleteTask(id) {
    dispath(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={onClickDeleteTask}
    />
  );
}
