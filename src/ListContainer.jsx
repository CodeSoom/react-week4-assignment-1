import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import { deleteAction } from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDelete(id) {
    dispatch(deleteAction(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}
