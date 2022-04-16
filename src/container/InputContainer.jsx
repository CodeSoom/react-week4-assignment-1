import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import { addTask, updateTaskTitle } from '../redux/action';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const handleChangeTitle = ({ target: { value } }) => {
    dispatch(updateTaskTitle(value));
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
