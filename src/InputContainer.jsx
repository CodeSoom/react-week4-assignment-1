import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from './selectors';
import actions from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector(selectors.getState);

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
