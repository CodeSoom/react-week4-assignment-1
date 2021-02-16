import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from './actions';
import Page from './Page';

export default function App() {
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector((state) => state);

  function handleChangeTitle(e) {
    dispatch(updateTask(e.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
