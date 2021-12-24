import { useSelector, useDispatch } from 'react-redux';

import { addTask, changeTitle } from './actions';
import Input from './Input';

const InputContainer = () => {
  const dispatch = useDispatch();
  const taskTitle = useSelector((store) => store.taskTitle);

  const addTaskHandler = () => {
    dispatch(addTask(taskTitle));
  };

  const changeTaskTitleHandler = ({ target: { value } }) => {
    dispatch(changeTitle(value));
  };
  return (
    <Input
      taskTitle={taskTitle}
      onClick={addTaskHandler}
      onChange={changeTaskTitleHandler}
    />
  );
};

export default InputContainer;
