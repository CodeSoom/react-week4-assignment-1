import { useSelector, useDispatch } from 'react-redux';

import { addTask, deleteTask, updateTaskTitle } from './store/actions';

import Page from './Page';
import ListContainer from './container/ListContainer';

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
    </div>
  );
}
