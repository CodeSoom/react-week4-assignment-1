import { useSelector, useDispatch } from 'react-redux';

import { deleteTask } from './action';

import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));
  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  );
}
