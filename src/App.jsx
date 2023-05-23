import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

import { updateTaskTitle, addTask, deleteTask } from './actions';

export default function App() {
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const disPatch = useDispatch();

  function handleChangeTitle(event) {
    disPatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    disPatch(addTask());
  }

  function handleClickDeleteTask(id) {
    disPatch(deleteTask(id));
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
