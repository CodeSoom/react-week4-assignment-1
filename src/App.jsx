import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  const { taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  );
}
