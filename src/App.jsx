import { useDispatch, useSelector } from 'react-redux';

import { updateTaskTitle, addTask, deleteTask } from './actions';

import Page from './Page';

function selector(state) {
  return {
    tasks: state.tasks,
    taskTitle: state.taskTitle,
  };
}

export default function App() {
  const { tasks, taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

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
