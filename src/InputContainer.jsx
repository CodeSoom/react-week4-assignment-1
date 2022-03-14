import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import { updateTaskTitle, addTask } from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const handleChangeTitle = (event) => {
    dispatch(updateTaskTitle(event.target.value));
  };
  const handleClickAddTask = () => {
    dispatch(addTask());
  };

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
