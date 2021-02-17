import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  updateTaskTitle,
  addTask,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClick() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
