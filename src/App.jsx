import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask } from './actions/todo';

import Page from './Page';

export default function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todo);
  const [title, setTitle] = useState('');

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleClickAddTask() {
    dispatch(addTask(title));
    setTitle('');
  }

  function handleClickDeleteTask(id) {
    dispatch(completeTask(id));
  }

  return (
    <Page
      taskTitle={title}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
