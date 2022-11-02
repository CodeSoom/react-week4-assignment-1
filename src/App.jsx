import { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    {
      id: 1,
      title: '아무것도 하지 않기 #1'
    },
    {
      id: 2,
      title: '아무것도 하지 않기 #2'
    },
  ],
}

function updateTaskTitle(state, taskTitle) {
  return {
    ...state,
    taskTitle,
  }

}

function addTask(state) {
  const { newId, tasks, taskTitle } = state;

  return {
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  }
}

function deleteTask(id, state) {
  const { tasks } = state;

  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  }

}



export default function App() {
  const [state, setState] = useState(initialState);

  const { taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    setState(updateTaskTitle(state, event.target.value))
  };
  

  function handleClickAddTask() {
    setState(addTask(state));
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(id, state));
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
