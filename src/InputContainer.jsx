import { useDispatch, useSelector } from 'react-redux';

import { changeTaskTitle, addTask } from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const handleChangeTitle = (e) => {
    dispatch(changeTaskTitle(e.target.value));
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
