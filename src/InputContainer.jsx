import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
