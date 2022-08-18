import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskTitle } from './actions';
import Input from './Input';

export default function InputContainer() {
  const state = useSelector(selector);
  const { taskTitle } = state;

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
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
