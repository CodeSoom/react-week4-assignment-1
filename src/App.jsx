import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateTitle,
  addTask,
  deleteTask,
} from './actions';

import Page from './Page';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  // 리덕스에서 상태를 가져옴
  const { taskTitle, tasks } = useSelector(selector);

  // 리덕스에게 상태관리 위임
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTitle(event.target.value));
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
