import Page from "./Page";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TODO, ADD_TODO, DELETE_TODO } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  function handleChangeTitle(event) {
    dispatch(CHANGE_TODO(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(ADD_TODO());
  }

  function handleClickDeleteTask(id) {
    dispatch(DELETE_TODO(id));
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
