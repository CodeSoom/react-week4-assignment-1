import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((selector) => ({
    taskTitle: selector.taskTitle,
  }));

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
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
