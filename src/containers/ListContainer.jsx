import { useDispatch, useSelector } from 'react-redux';

import List from '../components/List';
import { deleteTaskTitle } from '../actions';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTaskTitle(id) {
    dispatch(deleteTaskTitle(id));
  }

  return <List tasks={tasks} onClickDelete={handleClickDeleteTaskTitle} />;
}
