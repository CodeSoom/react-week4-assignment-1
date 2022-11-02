import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';

import { updateTaskTitle, addTask } from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
  };
}

export default function InputContainer() {
  const { taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={handleChangeTitle}
        onClick={handleClickAddTask}
      />
    </div>
  );
}
