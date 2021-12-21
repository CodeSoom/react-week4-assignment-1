import { useSelector, useDispatch } from 'react-redux';

import actions, { ACTION_TYPES } from '../../store/actions';
import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((store) => ({ tasks: store.tasks }));
  const dispatch = useDispatch();

  function onClickDelete(id) {
    dispatch(actions[ACTION_TYPES.DELETE_TASK](id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={onClickDelete}
    />
  );
}
