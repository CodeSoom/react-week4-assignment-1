import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './todosSlice';

import List from './List';

const ListContainer = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.todos.tasks);

  const handleClickDeleteTask = (id) => dispatch(deleteTask(id));

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
};

export default ListContainer;
