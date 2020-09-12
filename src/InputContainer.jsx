import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';
import { changeTitleAction, addTaskAction } from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { taskTitle } = useSelector((state) => state);

  const handleChangeTaskTitle = (e) => {
    dispatch(changeTitleAction(e.target.value));
  };

  const handleClickAddTask = () => {
    dispatch(addTaskAction());
  };

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTaskTitle}
      onClick={handleClickAddTask}
    />
  );
}
