import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import { updateAction, addAction } from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  function handleChangeInput(e) {
    dispatch(updateAction(e.target.value));
  }

  function handleClickAdd() {
    dispatch(addAction());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeInput}
      onClick={handleClickAdd}
    />
  );
}
