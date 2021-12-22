import { useSelector, useDispatch } from 'react-redux';

import { changeTaskTitle, addTask, deleteTask } from './actions';

import Page from './Page';

export default function App() {
  const { tasks, taskTitle } = useSelector((state) => ({
    tasks: state.tasks,
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(changeTaskTitle(event.target.value));
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
