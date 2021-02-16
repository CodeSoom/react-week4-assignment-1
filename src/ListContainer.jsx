import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTask } from './actions';
import List from './List';

function ListContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

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

export default ListContainer;
