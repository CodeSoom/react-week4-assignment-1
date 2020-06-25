import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateTaskTitle, addTask } from './actions';

import Page from './Page';

function deleteTask(state, id) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function App() {
  const { taskTitle, tasks } = useSelector((state) => ({
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
