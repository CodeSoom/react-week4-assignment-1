import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

// action creator
// 기존 상태는 reducer에서 알고 있기 때문에 여기서 알 필요 없다
function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

function addTask() {
  return {
    type: 'addTask',
  };
}

function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: {
      id,
    },
  };
}

export default function App() {
  // 1. 화면에 그리기 위해서 store에서 상태를 가져오는 과정
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

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
