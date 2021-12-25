import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import { changeTodo, addTodo, deleteTodo } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChangeTitle(event) {
    dispatch(changeTodo(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTodo());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTodo(id));
  }

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
