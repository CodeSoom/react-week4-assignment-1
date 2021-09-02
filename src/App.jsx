import { useDispatch, useSelector } from 'react-redux';

import Page from './Container/Page/Page';

import {
  updateTaskTitle,
  addTask,
} from './store/actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
  };
}

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle } = useSelector(selector);

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
