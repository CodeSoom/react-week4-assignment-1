import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';
import { updateTaskTitle, addTask } from '../../redux/actions';

const selector = (state) => ({
  taskTitle: state.taskTitle,
});

const InputContainer = () => {
  const { taskTitle } = useSelector((state) => selector(state));

  const dispatch = useDispatch();

  const handleChangeTitle = ({ target: { value } }) => dispatch(updateTaskTitle(value));
  const handleClickAddTask = () => dispatch(addTask());

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
};

export default InputContainer;
