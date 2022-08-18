import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';
import List from './List';

export default function ListContainer() {
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      taskTitle={taskTitle}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
