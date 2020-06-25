import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, changeTitle } from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: '과제과제',
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTitle('과제과제과제'));
  }

  function handleClickAddTask(title) {
    dispatch(addTask('과제과제과제'));
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
