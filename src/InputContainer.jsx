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

  return (
    <Input
      value={taskTitle}
      onChange={() => {}}
      onClick={handleClickAddTask}
    />
  );
}

export default InputContainer;
