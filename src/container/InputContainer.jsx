import { useDispatch, useSelector } from 'react-redux';

import Input from '../presentational/Input';
import {
  updateTaskTitle,
  addTask,
} from '../redux/actions';

export default function InputContainer() {
  const taskTitle = useSelector((state) => state.taskTitle);
  const dispatch = useDispatch();

  function handleChangeTitle(e) {
    dispatch(updateTaskTitle(e.target.value));
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
