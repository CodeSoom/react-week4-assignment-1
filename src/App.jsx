import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';
import {
  updateTitle,
  addTask,
  deleteTask,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { tasks, taskTitle } = useSelector((state) => ({
    tasks: state.tasks,
    taskTitle: state.taskTitle,
  }));

  function handleChangeTitle(event) {
    dispatch(updateTitle(event));
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
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
