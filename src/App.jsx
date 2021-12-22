import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

export default function App() {
  const dispatch = useDispatch();

  const { tasks, taskTitle } = useSelector((state) => ({
    tasks: state.tasks,
    taskTitle: state.taskTitle,
  }));

  function handleChangeTitle(event) {
    dispatch({
      type: 'updateTitle',
      payload: {
        taskTitle: event.target.value,
      },
    });
  }

  function handleClickAddTask() {
    dispatch({
      type: 'addTask',
    });
  }

  function handleClickDeleteTask(id) {
    dispatch({
      type: 'deleteTask',
      payload: {
        id,
      },
    });
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
