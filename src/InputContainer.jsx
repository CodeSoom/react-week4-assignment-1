import { useSelector, useDispatch } from 'react-redux';

import { addTask, updateTaskTitle } from './action';

import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(updateTaskTitle(target.value));
  };

  const handleClick = () => {
    dispatch(addTask());
  };

  return (
    <Input
      value={taskTitle}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
