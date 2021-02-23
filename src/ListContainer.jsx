import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDelete(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}
