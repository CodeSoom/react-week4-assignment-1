import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    useDispatch(deleteTask(id));
  }

  return (
    <div>
      <List
        tasks={tasks}
        onClickDelete={handleClickDeleteTask}
      />
    </div>
  );
}
