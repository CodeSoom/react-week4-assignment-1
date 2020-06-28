import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './action';

export default function ListContainer() {
  // 1. 화면에 그리기 위해서 store에서 ★상태를 가져오는 과정
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  // 2. redux를 통한 상태 관리 (기존 상태 몰라도 된다.)
  const dispatch = useDispatch();

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
