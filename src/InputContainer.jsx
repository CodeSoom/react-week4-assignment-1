import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
