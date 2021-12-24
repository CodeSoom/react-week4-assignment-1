import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import { changeTitle, addTask, deleteTask } from './actions';

export default function App() {
  const { taskTitle, tasks } = useSelector((store) => store);
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask(taskTitle));
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
