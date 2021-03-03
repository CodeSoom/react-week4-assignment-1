import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={handleChangeTitle}
        onClick={handleClickAddTask}
      />
    </div>
  );
}
