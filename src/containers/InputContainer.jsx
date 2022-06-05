import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/Input';

import { updateTaskTitle, addTaskTitle } from '../actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTaskTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTaskTitle() {
    dispatch(addTaskTitle());
  }
  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTaskTitle}
      onClick={handleClickAddTaskTitle}
    />
  );
}
