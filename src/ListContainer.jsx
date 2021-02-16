import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import List from './List';

function ListContainer() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  function handleClickDelete() {
    dispatch({ payload: 1, type: 'DELETE_TASK' });
  }
  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}

export default ListContainer;
