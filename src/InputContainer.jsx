import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateTitle,
  addTask,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <>
      <Input
        taskTitle={taskTitle}
        onChangeTitle={handleChangeTitle}
        onClickAddTask={handleClickAddTask}
      />
    </>
  );
}
