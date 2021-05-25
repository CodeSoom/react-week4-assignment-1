import { useDispatch, useSelector } from 'react-redux';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

import Page from './Page';

export default function App() {
  const { taskTitle, tasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChangeTitle(e) {
    dispatch(updateTaskTitle(e.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      tasks={tasks}
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
