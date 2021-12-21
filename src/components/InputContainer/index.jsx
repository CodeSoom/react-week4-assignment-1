import { useSelector, useDispatch } from 'react-redux';

import actions, { ACTION_TYPES } from '../../store/actions';
import Input from './Input';

export default function InputContainer() {
  const { taskTitle } = useSelector((store) => ({ taskTitle: store.taskTitle }));
  const dispatch = useDispatch();

  function handleChangeTitle({ target: { value } }) {
    dispatch(actions[ACTION_TYPES.CHANGE_TITLE](value));
  }

  function handleClickAddTask() {
    dispatch(actions[ACTION_TYPES.ADD_TASK]());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
