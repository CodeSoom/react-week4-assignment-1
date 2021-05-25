import { useDispatch, useSelector } from 'react-redux';

import {
  deleteTask,
} from './redux/actions';

import Page from './presentational/Page';

export default function App() {
  const { tasks } = useSelector((state) => state);
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
