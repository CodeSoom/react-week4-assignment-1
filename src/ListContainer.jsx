import { useSelector, useDispatch } from 'react-redux';

import { deleteTask } from './actions';
import List from './List';

const ListContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const clickDeleteHandler = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <List
      tasks={tasks}
      onClickDelete={clickDeleteHandler}
    />
  );
};

export default ListContainer;
