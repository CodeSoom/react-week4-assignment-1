import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from './store/actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => state.taskTitle);

  function handleChange() {
    return (event) => dispatch(updateTaskTitle(event.target.value));
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChange()}
      onClick={() => dispatch(addTask())}
    />
  );
}
