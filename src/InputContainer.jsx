import React from 'react';

import { useSelector } from 'react-redux';

import Input from './Input';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
  };
}

export default function InputContainer() {
  const { taskTitle } = useSelector(selector);

  function handleChangeTitle() {}

  function handleClickAddTask() {}

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
