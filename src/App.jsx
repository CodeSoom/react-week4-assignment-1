import { useDispatch, useSelector } from 'react-redux';

import Page from './Container/Page/Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './store/actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector(selector);

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
