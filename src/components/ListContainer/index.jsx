import { useSelector, useDispatch } from 'react-redux';

import { deleteTask } from '../../store/actions';
import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((store) => ({ tasks: store.tasks }));
  const dispatch = useDispatch();

  function onClickDelete(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={onClickDelete}
    />
  );
}
