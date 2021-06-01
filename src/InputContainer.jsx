import { useDispatch, useSelector } from 'react-redux';

import {
  addTask,
  updateTaskTitle,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(value) {
    dispatch(updateTaskTitle(value));
  }

  function handleClickAddTask() {
    if (taskTitle === '') {
      return;
    }

    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
