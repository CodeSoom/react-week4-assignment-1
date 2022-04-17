import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

function selector(state) {
  return {
    tasks: state.tasks,
  };
}

export default function ListContainer() {
  const { tasks } = useSelector(selector);

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask({ id }));
  }

  return (
    <List
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
