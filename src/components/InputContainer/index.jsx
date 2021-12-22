import { useSelector, useDispatch } from 'react-redux';

import { addTask, changeTitle } from '../../store/actions';
import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((store) => ({ taskTitle: store.taskTitle }));
  const dispatch = useDispatch();

  function handleChangeTitle({ target: { value } }) {
    dispatch(changeTitle(value));
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
