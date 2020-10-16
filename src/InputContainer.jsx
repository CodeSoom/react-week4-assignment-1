import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import { updateTaskTitleAction } from './actions/updateTaskTitle';
import { addTaskAction } from './actions/addTask';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitleAction(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTaskAction());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
