import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TASK } from './actions';

import Input from './Input';

function InputContainer() {
  const taskTitle = useSelector((state) => (state.taskTitle));
  const dispatch = useDispatch();

  function handleClickAddTask() {
    dispatch({ type: ADD_TASK });
  }

  function handleClickTaskTitle() {
    dispatch({ payload: '손씻기', type: 'UPDATE_TASK' });
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
