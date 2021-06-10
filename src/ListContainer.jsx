import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';
import List from './List';

export default function Page() {
  const { tasks } = useSelector((reduxState) => ({
    tasks: reduxState.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }
  return <List tasks={tasks} onClickDelete={handleClickDeleteTask} />;
}
