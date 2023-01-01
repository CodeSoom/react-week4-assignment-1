import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import { deleteTask } from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const handleClickDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
