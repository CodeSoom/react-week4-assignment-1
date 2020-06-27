import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

// App 컴포넌트는 세 가지 액션을 취할 예정.
import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './action';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  // 1. 화면에 그리기 위해서 store에서 ★상태를 가져오는 과정
  const { taskTitle, tasks } = useSelector(selector);

  // 2. redux를 통한 상태 관리 (기존 상태 몰라도 된다.)
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    // 기존 상태:: state
    // 새로운 상태:: event.target.value

    dispatch(updateTaskTitle(event.target.value));

    // setState -> dispatch
    // dispatch의 인자인 action은 type, payload로 구성
    // -> type, payload는 updateTaskTitle이라는 action creator가 생성
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
