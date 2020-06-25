import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import { changeTitle, addTask } from './action';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
  };
}

export default function InputContainer() {
  const { taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTitle(event.target.value));
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
