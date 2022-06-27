import { useSelector, useDispatch } from 'react-redux';

import { updateTaskTitle } from './actions';

import Page from './Page';

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
    // setState({
    //   ...state,
    //   newId: newId + 1,
    //   taskTitle: '',
    //   tasks: [...tasks, { id: newId, title: taskTitle }],
    // });
  }

  function handleClickDeleteTask() {
    // setState({
    //   ...state,
    //   tasks: tasks.filter((task) => task.id !== id),
    // });
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
