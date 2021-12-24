import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  function handleChangeTitle(event) {
    useDispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    useDispatch(addTask());
  }

  return (
    <div>
      <Input
        value={taskTitle}
        onChange={handleChangeTitle}
        onClick={handleClickAddTask}
      />
    </div>
  );
}
