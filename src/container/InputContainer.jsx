import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateTaskTitle, addTask } from '../actions/actions';

import Input from '../presentational/Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(value) {
    dispatch(updateTaskTitle(value));
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
