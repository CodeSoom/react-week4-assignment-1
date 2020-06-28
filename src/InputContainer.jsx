import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle, addTask,
} from './action';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  // 2. redux를 통한 상태 관리 (기존 상태 몰라도 된다.)
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    // 기존 상태:: state
    // 새로운 상태:: event.target.value

    dispatch(updateTaskTitle(event.target.value));

    // setState -> dispatch
    // dispatch의 인자인 action은 type, payload로 구성
    // -> type, payload는 updateTaskTitle이라는 action creator가 생성
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
