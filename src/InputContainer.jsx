import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  return (
    <Input
      value={taskTitle}
      onChange={(e) => dispatch({
        type: 'updateInput',
        payload: { taskTitle: e.target.value },
      })}
      onClick={() => dispatch({ type: 'addNewTask' })}
    />
  );
}
