import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

const ListContainer = () => {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const handleClickDeleteTask = (id) => (
    dispatch(deleteTask(id))
  );

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
};

export default ListContainer;
