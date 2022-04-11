import { useDispatch, useSelector } from 'react-redux';

import {
  deleteTask,
} from './actions';

import Page from './Page';

export default function App() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
