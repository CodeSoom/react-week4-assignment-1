import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';
import { changeTitleAction, addTaskAction } from './actions';

export default function InputContainer({ value }) {
  const dispatch = useDispatch();

  const handleChangeTaskTitle = (e) => {
    dispatch(changeTitleAction(e.target.value));
  };

  const handleClickAddTask = () => {
    dispatch(addTaskAction());
  };

  return (
    <Input
      value={value}
      onChange={handleChangeTaskTitle}
      onClick={handleClickAddTask}
    />
  );
}
