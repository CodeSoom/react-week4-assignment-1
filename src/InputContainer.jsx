import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  const handleChangeTitle = (newTitle) => {
    dispatch(updateTaskTitle(newTitle));
  };

  const handleClickAddTask = () => {
    dispatch(addTask());
  };

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
