import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import { addTask, deleteTask, updateTaskTitle } from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector((state) => state);

  const handleChangeTitle = (event) => dispatch(updateTaskTitle(event.target.value));

  const handleClickAddTask = () => dispatch(addTask());

  const handleClickDeleteTask = (id) => dispatch(deleteTask(id));

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
