import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import List from './List';

import { deleteTaskAction } from './actions/deleteTask';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTaskAction(id));
  }
  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
