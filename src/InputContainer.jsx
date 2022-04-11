import { useDispatch, useSelector } from 'react-redux';

import {
  updateTaskTitle,
  addTask,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function onChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function onClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={onChangeTitle}
      onClick={onClickAddTask}
    />
  );
}
