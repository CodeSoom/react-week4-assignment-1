import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import List from './List';

function deleteTask(state, id) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
