import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask } from './actions';

import Input from './Input';

function InputContainer() {
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => (state.taskTitle));

  function handleChangeTitle(event) {
    dispatch(updateTask(event.target.value));
  }

  function handleClickAddTask() {
    dispatch({ type: 'ADD_TASK' });
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}

export default InputContainer;
