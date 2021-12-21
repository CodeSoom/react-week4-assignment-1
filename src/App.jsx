import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  function selector(state) {
    return {
      taskTitle: state.taskTitle,
      tasks: state.tasks,
    };
  }

  // store에서 필요한 것만 가져오기
  const { taskTitle, tasks } = useSelector(selector);

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
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
