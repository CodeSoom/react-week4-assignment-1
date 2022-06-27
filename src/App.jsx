import { useDispatch, useSelector } from 'react-redux';

import { addTask, deleteTask, updateTaskTitle } from './actions';

import Page from './Page';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  const { taskTitle, tasks } = useSelector(selector);

  const dispatch = useDispatch();

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={(event) => dispatch(updateTaskTitle(event.target.value))}
      onClickAddTask={() => dispatch(addTask())}
      tasks={tasks}
      onClickDeleteTask={(id) => dispatch(deleteTask(id))}
    />
  );
}
