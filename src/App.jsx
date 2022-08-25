import { useDispatch, useSelector } from 'react-redux';

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

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector(selector);

  return (
    <Page
      taskTitle={taskTitle}
      tasks={tasks}
      onChangeTitle={(event) => dispatch(updateTaskTitle(event.target.value))}
      onClickAddTask={() => dispatch(addTask())}
      onClickDeleteTask={(id) => dispatch(deleteTask(id))}
    />
  );
}
