import { useSelector, useDispatch } from 'react-redux';

import { deleteTask } from './actions';

import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function onClickDeleteTask(taskId) {
    dispatch(deleteTask(taskId));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={onClickDeleteTask}
    />
  );
}
