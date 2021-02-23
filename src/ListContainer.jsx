import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_TASK } from './actions';

import List from './List';

function ListContainer() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  function handleClickDelete(id) {
    dispatch({ type: DELETE_TASK, payload: id });
  }
  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}

export default ListContainer;
