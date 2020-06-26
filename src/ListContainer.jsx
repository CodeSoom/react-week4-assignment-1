import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import List from './List';
import { deleteTaskAction } from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);

  const handleClickDeleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  };

  return <List tasks={tasks} onClickDelete={handleClickDeleteTask} />;
}
