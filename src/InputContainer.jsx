import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TASK, UPDATE_TASK } from './actions';

import Input from './Input';

function InputContainer() {
  const taskTitle = useSelector((state) => (state.taskTitle));
  const dispatch = useDispatch();

  function handleClickAddTask() {
    dispatch({ type: ADD_TASK });
  }

  function handleClickTaskTitle(event) {
    dispatch({ type: UPDATE_TASK, payload: event.target.value });
  }
  return (
    <Input
      value={taskTitle}
      onChange={handleClickTaskTitle}
      onClick={handleClickAddTask}
    />
  );
}

export default InputContainer;
