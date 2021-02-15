import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDelete(ID) {
    dispatch({ type: 'deleteCompleteTask', payload: { id: ID } });
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}
