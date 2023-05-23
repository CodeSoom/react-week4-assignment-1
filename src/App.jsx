import { useDispatch, useSelector } from 'react-redux';
import { updateTaskTitle, addTask, deleteTask } from './actions';
import Page from './Page';

export default function App() {
  function selector(state) {
    return {
      taskTitle: state.taskTitle,
      tasks: state.tasks,
    };
  }
  const { taskTitle, tasks } = useSelector(selector);
  const dispatch = useDispatch();
  // 관심사분리
  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch((addTask()));
  }

  function handleClickDeleteTask(id) {
    dispatch((deleteTask(id)));
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
