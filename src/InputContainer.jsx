import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  function handleChange(e) {
    dispatch({
      type: 'updateInput',
      payload: { taskTitle: e.target.value },
    });
  }

  function handleClick() {
    dispatch({ type: 'addNewTask' });
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
