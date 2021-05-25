import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  const { taskTitle, tasks } = useSelector(selector);

  const dispatch = useDispatch();

  // const [state, setState] = useState(initialState);
  // const { taskTitle, tasks } = state;

  // function handleChangeTitle(event) {
  //   dispatch(updateTaskTitle(event.target.value));
  // }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={(event) => dispatch(updateTaskTitle(event.target.value))}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
