import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskTitle } from './action';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));
  const dispatch = useDispatch();

  function handleChangeTaskTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }
  function handleClickAdd() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTaskTitle}
      onClick={handleClickAdd}
    />
  );
}
