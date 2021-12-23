import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';
import {
  deleteTask,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
    taskTitle: state.taskTitle,
  }));

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
