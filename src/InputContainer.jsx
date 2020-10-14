import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateTaskTitle, addTask } from './actions';

import Input from './Input';

export default function App() {
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
    <Input
      taskTitle={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
