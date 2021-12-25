import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

// 어떻게 작동하는지 신경 안써도 됨
export default function App() {
  const dispatch = useDispatch();

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
