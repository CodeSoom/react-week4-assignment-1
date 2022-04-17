import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import { updateTaskTitle, addTask } from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(value) {
    dispatch(updateTaskTitle(value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <div>
      <Input
        value={taskTitle}
        onChangeTitle={(event) => handleChangeTitle(event.target.value)}
        onClick={handleClickAddTask}
      />
    </div>
  );
}
