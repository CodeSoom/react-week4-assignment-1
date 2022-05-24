import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import { deleteTask } from './actions';

export default function ListContainer() {
  // tasks 목록만 알면
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
