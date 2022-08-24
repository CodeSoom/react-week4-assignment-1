import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';

// action creator
function updateTask(newTask) {
  return {
    type: 'updateTask',
    payload: {
      newTask,
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
  const { newTask, tasks } = useSelector((state) => ({
    newTask: state.newTask,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function onClickChangeTask(event) {
    dispatch(updateTask(event.target.value));
  }

  function onClickAddTask() {
    dispatch(addTask());
  }

  function onClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      tasks={tasks}
      newTask={newTask}
      onClickChangeTask={onClickChangeTask}
      onClickAddTask={onClickAddTask}
      onClickDeleteTask={onClickDeleteTask}
    />
  );
}
