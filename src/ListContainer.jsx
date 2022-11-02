import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import List from './List';

function selector(state) {
  return {
    tasks: state.tasks,
  };
}

export default function ListContainer() {
  const { tasks } = useSelector(selector);

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
