import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, changeTitle } from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTitle(event.target.value));
  }

  function handleClickAddTask(title) {
    dispatch(addTask(title));
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
