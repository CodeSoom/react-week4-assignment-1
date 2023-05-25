import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { updateTaskTitle, addTask } from './reducers';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));
  const dispatch = useDispatch();
  // 관심사분리
  function handleChangeTitle(event) {
    dispatch(updateTaskTitle({ taskTitle: event.target.value }));
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
