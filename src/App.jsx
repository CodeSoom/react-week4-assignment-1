import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
} from './actions';

const deleteTask = (state, id) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
};

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const handleChangeTitle = (event) => (
    dispatch(updateTaskTitle(event.target.value))
  );

  const handleClickAddTask = () => (
    dispatch(addTask())
  );

  const handleClickDeleteTask = (id) => (
    dispatch(deleteTask(state, id))
  );

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
