import { useSelector, useDispatch } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

export default function App() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
