import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateTaskTitle, addTask } from '../redux/actions';

import Page from './Page';

const selector = (state) => ({
  taskTitle: state.taskTitle,
  tasks: state.tasks,
});

const App = () => {
  const { taskTitle } = useSelector((state) => selector(state));

  const dispatch = useDispatch();

  const handleChangeTitle = ({ target: { value } }) => dispatch(updateTaskTitle(value));
  const handleClickAddTask = () => dispatch(addTask());

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  );
};

export default App;
