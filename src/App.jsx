import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import { deleteTask } from './store/actions';

export default function App() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
