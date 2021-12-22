import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const handleChangeTitle = (event) => (
    dispatch(updateTaskTitle(event.target.value))
  );

  const handleClickAddTask = () => (
    dispatch(addTask())
  );

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  );
}
