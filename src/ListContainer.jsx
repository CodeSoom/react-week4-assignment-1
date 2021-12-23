import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  deleteTask,
} from './actions';

function handleClickDeleteTask(id) {
  useDispatch(deleteTask(id));
}

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  return (
    <div>
      <List
        tasks={tasks}
        onClickDelete={handleClickDeleteTask}
      />
    </div>
  );
}
