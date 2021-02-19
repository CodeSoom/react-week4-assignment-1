import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  deleteTask,
} from './actions';

export default function ListContainer() {
  const dispatch = useDispatch;
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <ListContainer
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
