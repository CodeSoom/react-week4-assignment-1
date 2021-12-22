import { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function updateTaskTitle(state, taskTitle) {
  return ({
    ...state,
    taskTitle,
  });
}

function addTask(state, newId, taskTitle, tasks) {
  return ({
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  });
}

function deleteTask(state, tasks, id) {
  return ({
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  });
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { newId, taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState(updateTaskTitle(state, event.target.value));
  }

  function handleClickAddTask() {
    setState(addTask(state, newId, taskTitle, tasks));
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(state, tasks, id));
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
