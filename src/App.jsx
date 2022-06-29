import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import updateTaskTitle from './actions';

import Page from './Page';

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((state) => state);

  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  const { newId, tasks } = state;

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
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
