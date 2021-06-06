import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { deleteTask } from '../../redux/actions';

const selector = (state) => ({
  tasks: state.tasks,
});

const ListContainer = () => {
  const { tasks } = useSelector((state) => selector(state));
  const dispatch = useDispatch();

  const handleClickDeleteTask = (id) => dispatch(deleteTask(id));

  return <List tasks={tasks} onClickDelete={handleClickDeleteTask} />;
};

export default ListContainer;
