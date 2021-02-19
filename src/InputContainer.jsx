import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch;
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.title,
  }));

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <InputContainer
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
