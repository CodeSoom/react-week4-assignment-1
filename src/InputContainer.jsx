import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle, addTask } from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector((state) => state);

  function handleChangeTitle(event) {
    dispatch(updateTitle(event.target.value));
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
