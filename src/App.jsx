import { useDispatch, useSelector } from 'react-redux';

import { updateTaskTitle, addTask, deleteTask } from './action';

import Page from './Page';

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
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
