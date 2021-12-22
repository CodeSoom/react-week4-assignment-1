import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import { deleteTask } from './store/actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  return (
    <List
      tasks={tasks}
      onClickDelete={(id) => dispatch(deleteTask(id))}
    />
  );
}
