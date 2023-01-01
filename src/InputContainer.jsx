import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import { addTask, updateTaskTitle } from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  const handleChangeTitle = (event) => {
    dispatch(updateTaskTitle(event.target.value));
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
