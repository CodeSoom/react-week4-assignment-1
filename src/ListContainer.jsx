import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import List from './List';

const ListContainer = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const handleClickDeleteTask = (id) => dispatch(deleteTask(id));

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
};

export default ListContainer;
