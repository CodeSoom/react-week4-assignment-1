import { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function updateTaskTitle(oldState, newTitle) {
  return {
    ...oldState,
    taskTitle: newTitle,
  };
}

function addTask(oldState) {
  const { newId, taskTitle, tasks } = oldState;

  return {
    ...oldState,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
}

function deleteTask(oldState, id) {
  const { tasks } = oldState;

  return {
    ...oldState,
    tasks: tasks.filter((task) => task.id !== id),
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState(updateTaskTitle(state, event.target.value));
  }

  function handleClickAddTask() {
    setState(addTask(state));
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(state, id));
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
