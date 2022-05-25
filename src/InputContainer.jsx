import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispath = useDispatch();

  function handleChangeTitle(event) {
    dispath(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispath(addTask());
  }
  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
