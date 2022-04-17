import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
  };
}

export default function InputContainer() {
  const { taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeTitle(title) {
    dispatch(updateTaskTitle({ taskTitle: title }));
  }

  function handleClickAddTask() {
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
