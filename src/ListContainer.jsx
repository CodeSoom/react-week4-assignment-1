import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteTask,
} from './actions';

import List from './List';

export default function ListContainer() {
  // 리덕스에서 상태를 가져옴
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  // 리덕스에게 상태관리 위임
  const dispatch = useDispatch();

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
