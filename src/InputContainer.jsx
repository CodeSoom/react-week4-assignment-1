import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getState } from './selectors';
import actions from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector(getState);

  function handleChangeTitle(event) {
    dispatch(actions.changeTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(actions.addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
