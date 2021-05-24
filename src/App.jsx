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

  function handleChangeTitle(value) {
    dispatch(updateTaskTitle(value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={(e) => handleChangeTitle(e.target.value)}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
