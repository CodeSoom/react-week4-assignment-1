import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from './selectors';
import actions from './actions';

import List from './List';

export default function ListContainer() {
  const dispatch = useDispatch();
  const { tasks } = useSelector(selectors.getState);

  function handleClickDeleteTask(id) {
    dispatch(actions.removeTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
