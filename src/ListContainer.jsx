import {
  useDispatch,
  useSelector,
} from 'react-redux';

import List from './List';

import { deleteTask } from './actions';

function selector(state) {
  return {
    tasks: state.tasks,
  };
}

// 어떻게 작동하는지 신경 안써도 됨
export default function ListContainer() {
  const dispatch = useDispatch();

  const { tasks } = useSelector(selector);

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
