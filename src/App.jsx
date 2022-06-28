import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import { addTask, updateTaskTitle } from './actions';

export default function App() {
  const dispatch = useDispatch();

  const taskTitle = useSelector((state) => state.taskTitle);

  const handleChangeTitle = (event) => dispatch(updateTaskTitle(event.target.value));

  const handleClickAddTask = () => dispatch(addTask());

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  );
}
