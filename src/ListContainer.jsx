import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './store/actions';

import List from './List';

export default function ListContainer() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  return (
    <List
      tasks={tasks || []}
      onClickDelete={(id) => dispatch(deleteTask(id))}
    />
  );
}
