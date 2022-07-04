import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import { deleteTask } from '../store/actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDelete(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}
