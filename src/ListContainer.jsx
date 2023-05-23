import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './actions';
import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));
  const dispatch = useDispatch();
  // 관심사분리

  function handleClickDeleteTask(id) {
    dispatch((deleteTask(id)));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
