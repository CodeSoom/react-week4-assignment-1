import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

const selector = (state) => ({
  newId: state.newId,
  taskTitle: state.taskTitle,
  tasks: state.tasks,
});

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector(selector);

  function handleChangeTitle(newTitle) {
    dispatch(updateTaskTitle(newTitle));
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
